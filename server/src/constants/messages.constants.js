export const MESSAGES = {
  SUCCESS: {
    FETCHED: "Data fetched successfully",
    CREATED: "Created successfully",
    UPDATED: "Updated successfully",
    DELETED: "Deleted successfully",
  },

  ERROR: {
    SERVER_ERROR: "Something went wrong",
    VALIDATION_ERROR: "Validation failed",
    NOT_FOUND: "Resource not found", // 404
    BAD_REQUEST: "Bad request", // 400
    UNAUTHORIZED: "Unauthorized access", // 401
    FORBIDDEN: "You do not have permission to perform this action", // 403
    INSUFFICIENT_ROLE: "Insufficient role to access this resource", // 403
    CONFLICT: "Resource already exists", // 409
  },

  DATABASE: {
    CONNECTED: "MongoDB connection established successfully",
    DISCONNECTED: "MongoDB connection closed",
    CONNECTION_ERROR: "MongoDB connection failed",
    DISCONNECTION_ERROR: "Error during MongoDB disconnection",
  },

  AUTH: {
    // success
    REGISTER_SUCCESS: "Registered successfully",
    LOGIN_SUCCESS: "Logged in successfully",
    LOGOUT_SUCCESS: "Logged out successfully",
    TOKEN_REFRESHED: "Token refreshed successfully",
    SAME_PASSWORD: "New password must be different from your current password",
    PASSWORD_CHANGED: "Your password has been changed successfully.",
    PASSWORD_RESET_SENT: "Password reset link sent to your email",
    PASSWORD_RESET_SUCCESS: "Password reset successful. Please login again.",
    INVALID_CURRENT_PASSWORD: "The current password you entered is incorrect.",
    ACCOUNT_LOCKED: "Account temporarily locked", // 401
    TOO_MANY_REQUESTS: "Too many requests, please try again later", // 429

    // 401 - authentication errors
    LOGIN_FAILED: "Invalid email or password",
    NO_TOKEN: "No token provided",
    INVALID_TOKEN: "Invalid or expired token",
    TOKEN_EXPIRED: "Token has expired",
    TOKEN_FAILED: "Token verification failed",
    INVALID_RESET_TOKEN: "Reset token is invalid or expired.",
    NO_PERMISSION: "You do not have permission to access this resource",
  },

  USER: {
    EMAIL_ALREADY_EXISTS: "Email already exists",
    FETCHED: "User fetched successfully",
    USERS_FETCHED: "Users fetched successfully",
    UPDATED: "User updated successfully",
    DELETED: "User deleted successfully",
    NOT_FOUND: "User not found",
    ALREADY_DELETED: "User is already deleted",
    INVALID_ROLE: "Invalid role provided",
  },

  VALIDATION: {
    INVALID_EMAIL: "Please provide a valid email address",
    INVALID_PASSWORD:
      "Password must contain uppercase, lowercase, number and special character",
    INVALID_PHONE: "Invalid phone number format",
    REQUIRED_FIELDS: "All required fields must be provided",
    INVALID_ID: "Invalid ID format",
    INVALID_QUANTITY: "Quantity must be a positive integer.",
  },

  EMAIL: {
    REQUIRED_FIELDS: "Missing required email fields",
    INVALID_RECIPIENT: "Cannot send email to an invalid address.",
    PROVIDER_OFFLINE: "Email service is temporarily unavailable.",
    NOT_CONFIGURED: "Email service is not configured",

    SEND_FAILED: "Failed to send email. Please try again later.",
    SENT_SUCCESS: "Email sent successfully",

    SUBJECTS: {
      WELCOME: "Welcome to Tartib Platform!",
      VERIFICATION: "Verify your email address",
      PASSWORD_RESET: "Reset your password",
      PASSWORD_CHANGED: "Your Password Has Been Changed",
    },

    NOT_VERIFIED: "Please verify your email address to access this feature.",
    VERIFICATION_SENT: "Verification email sent. Please check your inbox.",
    ALREADY_VERIFIED: "Email is already verified.",
    PENDING_VERIFICATION:
      "This email is already registered but not verified. Please check your inbox or wait for the token to expire.",
    VERIFICATION_RECENTLY_SENT:
      "Please wait before requesting another verification email.",
    INVALID_VERIFICATION_TOKEN: "Verification token is invalid or expired.",

    RESET_LINK_SENT: "Password reset link sent to your email.",
  },
};
