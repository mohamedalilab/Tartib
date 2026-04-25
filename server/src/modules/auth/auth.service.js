import mongoose from "mongoose";
import User from "../../DB/models/user.model.js";
import { MESSAGES, USER_ROLES } from "../../constants/index.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../services/token.service.js";
import { env } from "../../config/env.js";
import { getExpiryDate } from "../../utils/date.util.js";
import { hashValue } from "../../utils/hash.util.js";
import { safeUserData } from "../../helpers/user.helper.js";
import { createConflictError } from "../../errors/error.factory.js";

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
