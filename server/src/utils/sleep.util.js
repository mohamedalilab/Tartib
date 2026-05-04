/**
 * @file sleep.util.js
 * @description Utility to pause execution for a given time (ms)
 */

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
