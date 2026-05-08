/**
 * @file email.templates.js
 * @description HTML builder functions for all email types.
 */

// Base template wrapper for consistency
const baseTemplate = (content) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Tartib</title>
</head>
<body>
  ${content}
  <hr />
  <p style="font-size:12px; color:#666;">© ${new Date().getFullYear()} Tartib. All rights reserved.</p>
</body>
</html>
`;

// Returns HTML for welcome email.
export const welcomeEmailHtml = (firstName, url) =>
  baseTemplate(`
  <h2>Welcome to Tartib, ${firstName}! 👋</h2>
  <p>We're glad to have you. Start organizing your tasks and boosting your productivity.</p>
  <p><strong>Quick tips:</strong></p>
  <ul>
    <li>Create your first project</li>
    <li>Add tasks with due dates</li>
    <li>Set reminders so you never miss a deadline</li>
  </ul>
  <p><a href="${url}">Go to your dashboard →</a></p>
  <p>Need help? Reply to this email anytime.</p>
  <p>Best regards,<br />The Tartib Team</p>
`);

// Returns HTML for email verification — link expires in 24 hours.
export const verificationEmailHtml = (firstName, url) =>
  baseTemplate(`
  <h2>Verify your email address</h2>
  <h3>Hi ${firstName}</h3>
  <p>Thanks for signing up! Please verify your email to start using Tartib.</p>
  <p><a href="${url}" style="display:inline-block; padding:10px 20px; background:#3b82f6; color:white; text-decoration:none;">Verify Email →</a></p>
  <p>Or copy this link: ${url}</p>
  <p><strong>This link expires in 24 hours.</strong></p>
  <hr />
  <p style="font-size:12px; color:#999;">If you didn't create an account with Tartib, please ignore this email.</p>
`);

// Returns HTML for password reset — link expires in 15 minutes.
export const passwordResetEmailHtml = (url) =>
  baseTemplate(`
  <h2>Reset your password</h2>
  <p>We received a request to reset your password. Click the button below to create a new one.</p>
  <p><a href="${url}" style="display:inline-block; padding:10px 20px; background:#3b82f6; color:white; text-decoration:none;">Reset Password →</a></p>
  <p>Or copy this link: ${url}</p>
  <p><strong>This link expires in 15 minutes.</strong></p>
  <hr />
  <p style="font-size:12px; color:#999;">If you didn't request this, please ignore this email. Your password won't change.</p>
`);

export const passwordChangedEmailHtml = (firstName) =>
  baseTemplate(`
  <h2>Password Changed 🔒</h2>
  <h3>Hi ${firstName}</h3>
  <p>Your password was successfully changed.</p>
  <p>Best regards,<br />The Tartib Team</p>
`);
