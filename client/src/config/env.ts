const _env = import.meta.env;

// 1. Validate API URL exist
if (!_env.VITE_API_BASE_URL) {
  throw new Error("Missing Env Variable: VITE_API_BASE_URL is required!");
}

export const ENV = {
  API_URL: _env.VITE_API_BASE_URL,
  APP_NAME: _env.VITE_APP_NAME || "Tartib",
  IS_DEV: _env.MODE === "development",
} as const;
