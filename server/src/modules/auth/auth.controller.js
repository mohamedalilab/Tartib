import * as AuthService from "./auth.service.js";
import asyncHandler from "../../middlewares/asyncHandler.js";
import { createBadRequestError } from "../../errors/error.factory.js";
import { createdResponse } from "../../utils/apiResponse.util.js";
import { HEADERS, HTTP_STATUS, MESSAGES } from "../../constants/index.js";
import { getRefreshCookieConfig } from "../../config/cookie.config.js";

// ============================================================
//                      AUTH CONTROLLER
// ============================================================

/**
 * @desc    Register a new user
 * @route   POST /api/auth/register
 * @access  Public
 */
export const register = asyncHandler(async (req, res) => {
  // 1. check for request body
  if (!req.body) throw createBadRequestError(MESSAGES.VALIDATION.REQUIRED_FIELDS);
  // 2. register user and get tokens service
  const { user, accessToken, refreshToken } = await AuthService.registerUser(
    req.body
  );

  // 3. set refresh token in secure Cookie
  res.cookie(HEADERS.REFRESH_TOKEN, refreshToken, getRefreshCookieConfig());

  // 4. return success response with safe user data and access token
  return res
    .status(HTTP_STATUS.CREATED)
    .json(
      createdResponse({ user, accessToken }, MESSAGES.AUTH.REGISTER_SUCCESS)
    );
});

