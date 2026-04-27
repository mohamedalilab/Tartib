import mongoose from "mongoose";
import User from "../../DB/models/user.model.js";
import { MESSAGES, USER_ROLES } from "../../constants/index.js";
import {
  decodeToken,
  generateAccessToken,
  generateRefreshToken,
} from "../../services/token.service.js";
import { env } from "../../config/env.js";
import { getExpiryDate } from "../../utils/date.util.js";
import { hashValue, verifyPassword } from "../../utils/hash.util.js";
import { safeUserData } from "../../helpers/user.helper.js";
import {
  createConflictError,
  createNotFoundError,
  createUnauthorizedError,
} from "../../errors/error.factory.js";

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
    throw createConflictError(MESSAGES.USER.EMAIL_ALREADY_EXISTS);
  }

  // 2. create object_id for user
  const userId = new mongoose.Types.ObjectId();

  // 3. define user roles: default: ["customer"]
  const roles = [USER_ROLES.CUSTOMER];

  // 4. generate access and refresh token
  const accessToken = generateAccessToken({ userId, roles });
  const refreshToken = generateRefreshToken({ userId });

  // 5. refreshTokens array with hashed refresh token and expireAt
  const refreshTokens = [
    {
      token: hashValue(refreshToken),
      expireAt: getExpiryDate(env.JWT.REFRESH_EXPIRE),
    },
  ];

  // 6. create & save user in DB
  const user = await User.create({
    _id: userId,
    ...userData,
    roles,
    refreshTokens,
  });

  // 7. return safe user data + tokens
  return {
    user: safeUserData(user),
    accessToken,
    refreshToken,
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
  // 1. check if user exists
  const user = await User.findOne({ email }).select("+password").exec();
  if (!user) throw createUnauthorizedError(MESSAGES.AUTH.LOGIN_FAILED);

  // 2. validate password
  const validPwd = await verifyPassword(password, user.password);
  if (!validPwd) throw createUnauthorizedError(MESSAGES.AUTH.LOGIN_FAILED);

  // 3. clean up expire tokens first !!!!!
  user.refreshTokens = user.refreshTokens.filter(
    (rt) => rt.expireAt > new Date()
  );

  // 4. handle existing refresh token cookie
  if (currentRefreshToken) {
    // hash token to find it
    const currentHashedToken = hashValue(currentRefreshToken);
    const tokenInDB = user.refreshTokens.find(
      (rt) => rt.token === currentHashedToken
    );
    // if cookie exists but not in DB => token was already rotated
    // else so its old token => remove it + clean up any expired tokens
    if (!tokenInDB) {
      const decoded = decodeToken(currentRefreshToken);
      // check if token was generated before password change
      // if generated after change:
      // it may user token has been rotated - wipe all including
      if (
        !decoded?.iat ||
        !user.passwordChangedAt ||
        !user.changedPasswordAfter(decoded.iat)
      ) {
        user.refreshTokens = [];
      }
    } else {
      user.refreshTokens = user.refreshTokens.filter(
        (rt) => rt.token !== currentHashedToken
      );
    }
  }

  // 5. generate access and refresh token
  const accessToken = generateAccessToken({
    userId: user._id,
    roles: user.roles,
  });
  const refreshToken = generateRefreshToken({ userId: user._id });

  // 6. hash new refresh token and store it
  const hashedToken = hashValue(refreshToken);
  user.refreshTokens.push({
    token: hashedToken,
    expireAt: getExpiryDate(env.JWT.REFRESH_EXPIRE),
  });

  // 7. update last login & save changes in DB
  user.lastLoginAt = new Date();
  await user.save();

  // 8. return safe user data + tokens
  return {
    user: safeUserData(user),
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
    // check if token was generated before password change
    // if generated after change:
    // it may user token has been rotated - wipe all including
    if (
      !decoded?.iat ||
      !user.passwordChangedAt ||
      !user.changedPasswordAfter(decoded.iat)
    ) {
      user.refreshTokens = [];
    }
  } else {
    // just remove token from user
    user.refreshTokens = user.refreshTokens.filter(
      (rt) => rt.token !== hashedToken
    );
  }
  // 4. save changes inDB
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
  // 1. find user by id
  const user = await User.findById(userId).select("+password").exec();
  if (!user) throw createNotFoundError(MESSAGES.USER.NOT_FOUND);

  // 2. verify current password
  const valid = await verifyPassword(currentPassword, user.password);
  if (!valid)
    throw createUnauthorizedError(MESSAGES.AUTH.INVALID_CURRENT_PASSWORD);

  // 3. make sure new password is not same as old one
  const isSameAsOld = await verifyPassword(newPassword, user.password);
  if (isSameAsOld) throw createBadRequestError(MESSAGES.AUTH.SAME_PASSWORD);

  // 4. add newPassword in user and remember it will hash in model !!!
  user.password = newPassword;
  user.passwordChangedAt = Date.now();
  user.passwordReset.token = undefined;
  user.passwordReset.expireAt = undefined;

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
};
