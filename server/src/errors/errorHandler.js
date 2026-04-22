/**
 * @file errorHandler.js
 * @description Global error handling middleware for Express.
 * Catches all errors passed through next(err) & returns a clean JSON response.
 * Must be added as the LAST middleware in app.js
 *
 * Handles:
 * - ApiError (operational/expected errors)
 * - Mongoose errors (CastError, ValidationError, duplicate key)
 * - JWT errors (invalid token, expired token)
 * - Unknown errors (fallback to 500)
 *
 * @reminder help to handle errors if i forget handling it like JWT, Mongoose
 */

import {
  HTTP_STATUS,
  MESSAGES,
  JWT_ERRORS,
  MONGOOSE_ERRORS,
  MULTER_ERRORS,
} from "../constants/index.js";
import { env } from "../config/env.js";

export const errorHandler = (error, req, res, next) => {
  error.message = error.message || MESSAGES.ERROR.SERVER_ERROR;
  // if no status code then set it 500
  error.statusCode = error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;

  // Mongoose: Invalid ObjectId
  // Triggered when an invalid id format is passed
  if (error.name === MONGOOSE_ERRORS.CAST_ERROR) {
    error.statusCode = HTTP_STATUS.NOT_FOUND;
    error.message = MESSAGES.ERROR.NOT_FOUND;
  }

  // Mongoose: Duplicate Key
  // Triggered when a unique field already exists
  if (error.code === MONGOOSE_ERRORS.DUPLICATE_KEY) {
    const field = Object.keys(error.keyValue)[0]; // get field name
    error.statusCode = HTTP_STATUS.CONFLICT;
    error.message = `${field} already exists`;
  }

  // Mongoose: Validation Error
  // Triggered when schema validation fails
  if (error.name === MONGOOSE_ERRORS.VALIDATION_ERROR) {
    const fields = Object.values(error.errors).map((e) => e.message);
    error.statusCode = HTTP_STATUS.UNPROCESSABLE_ENTITY;
    error.message = fields.join(", ");
  }

  // JWT: Invalid Token
  if (error.name === JWT_ERRORS.INVALID) {
    error.statusCode = HTTP_STATUS.UNAUTHORIZED;
    error.message = MESSAGES.AUTH.INVALID_TOKEN;
  }

  // JWT: Expired Token
  if (error.name === JWT_ERRORS.EXPIRED) {
    error.statusCode = HTTP_STATUS.UNAUTHORIZED;
    error.message = MESSAGES.AUTH.TOKEN_EXPIRED;
  }

  // Multer: Unexpected field OR too many files
  if (error.code === MULTER_ERRORS.LIMIT_UNEXPECTED_FILE) {
    error.statusCode = HTTP_STATUS.BAD_REQUEST;
    error.message =
      error.field === "productImages"
        ? MESSAGES.UPLOAD.MAX_IMAGES
        : `Unexpected field: ${error.field}`;
  }

  res.status(error.statusCode).json({
    success: false,
    statusCode: error.statusCode,
    message: error.message,
    ...(env.isDevelopment && { stack: error.stack }),
  });
};
