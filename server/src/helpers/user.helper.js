// ============================================================
//                      USER HELPERS
// ============================================================

/**
 * @desc    Strip sensitive fields and return safe user data
 * @param   {Object} user - Mongoose user document
 * @param   {boolean} isAdmin - Indicates whether the requester is an admin.
 * @returns {Object} safe user data
 */
export const safeUserData = (user, isAdmin = false) => {
  // 1. Extract the base safe fields
  const {
    _id,
    email,
    firstName,
    lastName,
    displayName,
    phoneNumber,
    profileImage = null,
    bio = "",
    language = "en",
    timezone = "UTC",
    status = "active",
    roles,
    createdAt,
    updatedAt,
  } = user;

  const base = {
    userId: _id,
    email,
    firstName,
    lastName,
    displayName: displayName || `${firstName} ${lastName}`,
    fullName: `${firstName} ${lastName}`,
    phoneNumber,
    profileImage,
    bio,
    language,
    timezone,
    status,
    roles,
  };

  // 2. Check if the requester is an admin
  // If true: include additional management-related fields
  if (isAdmin) {
    return {
      ...base,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  return base;
};
