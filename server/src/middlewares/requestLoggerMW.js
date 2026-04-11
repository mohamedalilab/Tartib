/**
 * @middleware
 * @description Logs basic request information to the console.
 * Useful for debugging request flow during development.
 */
export function requestLoggerMW(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} - ${req.url}`);
  next();
}
