import mongoose from "mongoose";
import User from "../../DB/models/user.model.js";
import { env } from "../../config/env.js";
import { MESSAGES, USER_ROLES } from "../../constants/index.js";
import {
  decodeToken,
  generateAccessToken,
  generateRefreshToken,
} from "../../services/token.service.js";
import {
  generateHashedToken,
  hashValue,
  verifyPassword,
} from "../../utils/hash.util.js";
import { getExpiryDate } from "../../utils/date.util.js";
import { safeUserData } from "../../helpers/user.helper.js";
import {
  createBadRequestError,
  createConflictError,
  createNotFoundError,
  createUnauthorizedError,
} from "../../errors/error.factory.js";
import { sendEmail } from "../../services/email/email.service.js";
import {
  passwordChangedEmailHtmlSimple,
  verificationEmailHtml,
  welcomeEmailHtml,
} from "../../services/email/email.templates.js";

// ============================================================
//                      AUTH SERVICE
// ============================================================

/**
 * @desc    Register a new user, generate and store tokens
 * @param   {Object} userData - Raw user data from request body
 * @returns {Object} user, accessToken, refreshToken
 */
export const registerUser = async (userData) => {
  // 1. check if email already exist
  const emailExist = await User.findOne({ email: userData.email }).exec();
  if (emailExist) {
    // if verified: block registering
    if (emailExist.emailVerified) {
      throw createConflictError(MESSAGES.USER.EMAIL_ALREADY_EXISTS);
    }

    // if unverified + token expired: delete old account, allow re-register
    if (emailExist.emailVerificationToken?.expireAt < new Date()) {
      await User.deleteOne({ _id: emailExist._id });
    } else {
      // unverified but token still valid -> tell user to check inbox
      throw createConflictError(MESSAGES.EMAIL.PENDING_VERIFICATION);
    }
  }

  // 2. create object_id for user
  const userId = new mongoose.Types.ObjectId();

  // 3. generate email verification token
  const { token: verificationToken, hashed: hashedVerificationToken } =
    generateHashedToken();

  // 4. create & save user in DB
  const user = await User.create({
    _id: userId,
    ...userData,
    emailVerificationToken: {
      token: hashedVerificationToken,
      expireAt: getExpiryDate(env.EMAIL.VERIFICATION_EXPIRE),
    },
  });

  // 5. send verify email
  await sendEmail({
    to: user.email,
    subject: MESSAGES.EMAIL.SUBJECTS.VERIFICATION,
    html: verificationEmailHtml(
      user.firstName,
      `${env.CLIENT_URL}/?token=${verificationToken}`
    ),
  });

  // 6. return safe user data + tokens
  return {
    userId: user._id,
    fullName: user.fullName,
    email: user.email,
    emailVerified: false,
  };
};

// ------------------------------------------------------------

/**
 * @desc    Validate credentials and generate tokens
 * @param   {string} email    - User email address
 * @param   {string} password - User plain text password
 * @returns {Object} user, accessToken, refreshToken
 */
export const loginUser = async (email, password, currentRefreshToken) => {
  // 1. Verify user, password, email verified
  const user = await User.findOne({ email }).select("+password").exec();
  if (!user) throw createUnauthorizedError(MESSAGES.AUTH.LOGIN_FAILED);

  const validPwd = await verifyPassword(password, user.password);
  if (!validPwd) throw createUnauthorizedError(MESSAGES.AUTH.LOGIN_FAILED);

  if (!user.emailVerified)
    throw createBadRequestError(MESSAGES.EMAIL.NOT_VERIFIED);

  // 2. manage clean refresh tokens with Reuse Detection
  // with Atomic Cleanup (Rotation & Expiry)
  let currentHashedToken = null;
  let shouldWipeAllTokens = false;

  // handle existing refresh token cookie
  if (currentRefreshToken) {
    // hash token to find it
    currentHashedToken = hashValue(currentRefreshToken);
    const tokenInDB = user.refreshTokens.find(
      (rt) => rt.token === currentHashedToken
    );
    // if cookie exists but not in DB => token was already rotated
    // or its old token => remove it + clean up any expired tokens
    if (!tokenInDB) {
      const decoded = decodeToken(currentRefreshToken);
      // Attack detection: Valid refresh token (issued after last password change)
      // but not found in database = token reuse attack
      if (
        decoded?.iat &&
        (!user.passwordChangedAt || !user.changedPasswordAfter(decoded.iat))
      ) {
        shouldWipeAllTokens = true;
      }
    }
  }

  // 3. generate access and refresh token
  const accessToken = generateAccessToken({
    userId: user._id,
    roles: user.roles,
  });
  const refreshToken = generateRefreshToken({ userId: user._id });

  // 4. hash the new refresh token and add expireAt
  const hashedToken = hashValue(refreshToken);
  const newTokenEntry = {
    token: hashedToken,
    expireAt: getExpiryDate(env.JWT.REFRESH_EXPIRE),
  };

  // 5. Atomic Update last login and push new token
  const updateQuery = {
    $set: {
      refreshTokens: shouldWipeAllTokens
        ? [newTokenEntry]
        : [
            ...user.refreshTokens.filter(
              (rt) =>
                rt.expireAt > new Date() && rt.token !== currentHashedToken
            ),
            newTokenEntry,
          ],
      lastLoginAt: new Date(),
    },
  };

  const updatedUser = await User.findByIdAndUpdate(user._id, updateQuery, {
    returnDocument: true,
  });

  // 6. safe check
  if (!updatedUser) throw createUnauthorizedError(MESSAGES.AUTH.LOGIN_FAILED);

  // 7. return safe user data + tokens
  return {
    user: safeUserData(updatedUser),
    accessToken,
    refreshToken,
  };
};

// ------------------------------------------------------------

/**
 * @desc    Invalidate refresh token on logout
 * @param   {string} refreshToken - Token stored in httpOnly cookie
 * @returns {void}
 */
export const logoutUser = async (refreshToken) => {
  // 1. decode refreshToken
  const decoded = decodeToken(refreshToken);
  if (!decoded || !decoded.userId) return;

  // 2. check if user exist
  const user = await User.findById(decoded.userId).exec();
  if (!user) return;

  // 3. hash token & detect token reused
  const hashedToken = hashValue(refreshToken);
  const tokenInDB = user.refreshTokens.find((rt) => rt.token === hashedToken);
  if (!tokenInDB) {
    // Attack detection: Valid refresh token (issued after last password change)
    // but not found in database = token reuse attack
    if (
      decoded?.iat &&
      (!user.passwordChangedAt || !user.changedPasswordAfter(decoded.iat))
    ) {
      user.refreshTokens = [];
    }
  } else {
    // just remove token from user
    user.refreshTokens = user.refreshTokens.filter(
      (rt) => rt.token !== hashedToken
    );
  }
  // 4. save changes in DB
  await user.save();
};

// ------------------------------------------------------------

/**
 * Changes the password for an already authenticated user.
 * @param {string} userId
 * @param {string} currentPassword
 * @param {string} newPassword
 * @param {string} refreshToken
 */
export const changePassword = async (
  userId,
  currentPassword,
  newPassword,
  refreshToken
) => {
  // 1. verify user and password
  const user = await User.findById(userId).select("+password").exec();
  if (!user) throw createNotFoundError(MESSAGES.USER.NOT_FOUND);

  const valid = await verifyPassword(currentPassword, user.password);
  if (!valid)
    throw createUnauthorizedError(MESSAGES.AUTH.INVALID_CURRENT_PASSWORD);

  // 2. make sure new password is not same as old one
  const isSameAsOld = await verifyPassword(newPassword, user.password);
  if (isSameAsOld) throw createBadRequestError(MESSAGES.AUTH.SAME_PASSWORD);

  // 3. add newPassword in user and remember it will hash in model !!!
  user.password = newPassword;
  user.passwordChangedAt = Date.now();
  delete user.passwordReset.token;
  delete user.passwordReset.expireAt;

  // 5. invalidate all refresh tokens for security except the current device !!!
  if (refreshToken) {
    const currentHashToken = hashValue(refreshToken);
    user.refreshTokens = user.refreshTokens.filter(
      (rtoken) => rtoken.token === currentHashToken
    );
  } else {
    user.refreshTokens = [];
  }

  // 6. save changes in DB
  await user.save();

  // 7. send password changed email
  await sendEmail({
    to: user.email,
    subject: MESSAGES.EMAIL.SUBJECTS.PASSWORD_CHANGED,
    html: passwordChangedEmailHtmlSimple(user.firstName),
  });
};

// ------------------------------------------------------------

/**
 * @desc    Verify email using token from link
 * @param   {string} token - Raw token from body
 * @returns {void}
 */
export const verifyEmail = async (token) => {
  // 1. hash the incoming token to compare with DB
  const hashedToken = hashValue(token);

  // 2. find user with token and make sure it hasn't expired
  const user = await User.findOne({
    "emailVerificationToken.token": hashedToken,
    "emailVerificationToken.expireAt": { $gt: new Date() },
  }).exec();
  if (!user)
    throw createBadRequestError(MESSAGES.EMAIL.INVALID_VERIFICATION_TOKEN);

  // 3. check if already verify
  if (user.emailVerified)
    throw createBadRequestError(MESSAGES.EMAIL.EMAIL_ALREADY_VERIFIED);

  // 4. generate access and refresh token
  const accessToken = generateAccessToken({
    userId: user._id,
    roles: user.roles,
  });
  const refreshToken = generateRefreshToken({ userId: user._id });

  // 5. refreshTokens array with hashed token and expireAt
  user.refreshTokens = [
    {
      token: hashValue(refreshToken),
      expireAt: getExpiryDate(env.JWT.REFRESH_EXPIRE),
    },
  ];

  // 6. mark as verified + clear token fields
  user.emailVerified = true;
  user.emailVerificationToken.token = null;
  user.emailVerificationToken.expireAt = null;

  // 7. save changes in DB
  await user.save();

  // 8. send verification email
  await sendEmail({
    to: user.email,
    subject: MESSAGES.EMAIL.SUBJECTS.VERIFICATION,
    html: welcomeEmailHtml(user.firstName),
  });

  // 9. return safe user data + tokens
  return {
    user: safeUserData(user),
    accessToken,
    refreshToken,
  };
};
