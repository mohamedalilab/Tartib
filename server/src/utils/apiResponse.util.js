import { MESSAGES } from "../constants/messages.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";

/**
 * Formats a standard 200 OK response.
 * @param {any} data - The payload to send to the client (object, array, etc.)
 * @param {string} message - Success message
 * @returns {object} Standardized response object
 */
export const successResponse = (data, message = MESSAGES.SUCCESS.FETCHED) => ({
  statusCode: HTTP_STATUS.OK,
  success: true,
  message,
  data,
});

/**
 * Formats a standard 201 Created response.
 * @param {any} data - The created resource data
 * @param {string} message - Creation success message
 * @returns {object} Standardized response object
 */
export const createdResponse = (data, message = MESSAGES.SUCCESS.CREATED) => ({
  statusCode: HTTP_STATUS.CREATED,
  success: true,
  message,
  data,
});