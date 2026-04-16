import { getStorage, isBrowser } from "@/shared/utils/storage";
import { createSelector, createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Theme mode type (restricted to light/dark only)
export type ThemeMode = "light" | "dark";

export interface ThemeState {
  mode: ThemeMode;
}

// Local storage key for persisting user preference
export const THEME_KEY = "tartib-theme-mode";

// Resolve initial theme (SSR-safe + localStorage + system preference)
function getInitialThemeMode(): ThemeMode {
  if (!isBrowser) return "dark";

  const stored = getStorage(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;

  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return prefersDark ? "dark" : "light";
}

const initialState: ThemeState = {
  mode: getInitialThemeMode(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // Set explicit theme mode
    setThemeMode(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
    },
    // Toggle between light and dark
    toggleThemeMode(state) {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export const { setThemeMode, toggleThemeMode } = themeSlice.actions;
export default themeSlice.reducer;

// Selectors (memoized)
export const selectThemeState = (state: { theme: ThemeState }) => state.theme;
export const selectThemeMode = createSelector([selectThemeState], (theme) => theme.mode);
export const selectIsDarkMode = createSelector([selectThemeMode], (mode) => mode === "dark");
