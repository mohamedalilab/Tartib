import { Resend } from "resend";
import { env } from "../../config/env.js";
import { REGEX } from "../../utils/regex.util.js";
import { MESSAGES } from "../../constants/messages.constants.js";
import {
  createBadGatewayError,
  createBadRequestError,
  createValidationError,
} from "../../errors/error.factory.js";

// Create Resend client with API key from env
const resendClient = new Resend(env.EMAIL.API_KEY);

/**
 * Sends an email using the Resend email service
 * @description This function handles the core email sending logic
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email address
 * @param {string} options.subject - Email subject line
 * @param {string} options.html - HTML content of the email
 *
 * @returns {Promise<Object>} Resend API response containing email delivery details
 * @returns {string} return.data.id - Unique identifier for the sent email
 */
export async function sendEmail({ to, subject, html }) {
  // 1. Validate required fields
  if (!to || !subject || !html)
    throw createBadRequestError(MESSAGES.EMAIL.REQUIRED_FIELDS);

  // 2. Validate email format using regex pattern
  if (!REGEX.EMAIL.test(to))
    throw createValidationError(MESSAGES.EMAIL.INVALID_RECIPIENT);

  try {
    // 3. Send email via Resend API
    const response = await resendClient.emails.send({
      from: `${env.EMAIL.FROM_NAME} <${env.EMAIL.FROM_EMAIL}>`,
      to,
      subject,
      html,
    });

    // 4. Handle API errors
    if (!response || response?.error)
      throw createBadGatewayError(
        response.error.message || MESSAGES.EMAIL.PROVIDER_OFFLINE
      );

    // 5. Return successful response data (contains email ID)
    return response.data;
  } catch (err) {
    throw createBadGatewayError(
      err?.message || MESSAGES.EMAIL.PROVIDER_OFFLINE
    );
  }
}
