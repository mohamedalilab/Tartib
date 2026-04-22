import mongoose from "mongoose";
import { REGEX } from "../../utils/regex.util";
import { MESSAGES } from "../../constants/index.js";

// USER SCHEMA
const userSchema = new mongoose.Schema(
  {
    // AUTH
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [REGEX.EMAIL, MESSAGES.VALIDATION.INVALID_EMAIL],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
      match: [REGEX.PASSWORD, MESSAGES.VALIDATION.INVALID_PASSWORD],
    },

    // PROFILE
    firstName: {
      type: String,
      required: true,
      minlength: 2,
      lowercase: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
      lowercase: true,
      trim: true,
    },
    displayName: { type: String },
    bio: { type: String, maxlength: 500 },
    profileImage: { type: String },

    // CONTACT & PREFERENCES
    phoneNumber: {
      type: String,
      match: [REGEX.phoneNumber, MESSAGES.VALIDATION.INVALID_PHONE],
    },
    language: { type: String, enum: ["en", "ar", "fr"], default: "en" },
    timezone: { type: String, default: "UTC" },

    // AUTHORIZATION
    roles: {
      type: [String],
      enum: Object.values(USER_ROLES),
      default: ["user"],
    },
    status: {
      type: String,
      enum: Object.values(USER_STATUS),
      default: "active",
    },

    // EMAIL VERIFICATION
    emailVerification: {
      isVerified: Boolean,
      token: String,
      expiresAt: Date,
    },

    // SECURITY
    refreshTokens: [
      {
        token: {
          type: String,
          required: true,
        },
        expireAt: {
          type: Date,
          required: true,
        },
      },
    ],

    passwordReset: {
      token: String,
      expiresAt: Date,
    },

    twoFactor: {
      isEnabled: Boolean,
      secret: String,
    },

    // AUDIT & TRACKING
    lastLoginAt: { type: Date },
    lastLoginIP: { type: String },
    loginAttempts: { type: Number, default: 0, select: false },
    lockUntil: { type: Date, select: false },

    // SOFT DELETE
    isDeleted: { type: Boolean, default: false, index: true },
    deletedAt: { type: Date, select: false },

    // METRICS
    profileCompletenessScore: { type: Number, default: 0, min: 0, max: 100 },
  },
  { timestamps: true, collection: "users" }
);





export default mongoose.model('User', userSchema);