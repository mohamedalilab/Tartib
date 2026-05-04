import dotenv from "dotenv";

dotenv.config();

export const env = {
  // Application
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 4000,
  SHUTDOWN_TIMEOUT: parseInt(process.env.SHUTDOWN_TIMEOUT) || 15_000,

  // Development flags
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",

  // Frontend
  CLIENT_URL: process.env.CLIENT_URL,
  ADMIN_URL: process.env.ADMIN_URL,

  // Database
  DATABASE_URI: process.env.DATABASE_URI,

  // Cookies
  COOKIE: {
    REFRESH_MAX_AGE:
      parseInt(process.env.COOKIE_REFRESH_MAX_AGE) || 2 * 24 * 60 * 60 * 1000,
    HTTP_ONLY: process.env.COOKIE_HTTP_ONLY === "true",
    SECURE: process.env.COOKIE_SECURE === "true",
    SAME_SITE: process.env.COOKIE_SAME_SITE || "lax",
  },

  // hashing
  BCRYPT_SALT_ROUNDS: parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10,

  // JWT
  JWT: {
    SECRET_ACCESS: process.env.JWT_SECRET_ACCESS,
    SECRET_REFRESH: process.env.JWT_SECRET_REFRESH,
    ACCESS_EXPIRE: process.env.JWT_ACCESS_EXPIRE || "15m",
    REFRESH_EXPIRE: process.env.JWT_REFRESH_EXPIRE || "7d",
  },

  // EMAIL
  EMAIL: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    FROM_EMAIL: process.env.EMAIL_FROM || "mail@mohamed-ali.me",
    FROM_NAME: process.env.EMAIL_FROM_NAME || "Tartib",
  },
};
