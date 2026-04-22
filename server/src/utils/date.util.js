import ms from "ms";

// ============================================================
//                       DATE UTIL
// ============================================================

/**
 * @desc    Get expiry date from a duration string
 * @param   {string} duration - "15m", "7d", "24h"
 * @returns {Date} expiry date
 */
export const getExpiryDate = (duration) => {
  // 1. calculate and return expiry date from now
  return new Date(Date.now() + ms(duration));
};
