import { createListenerMiddleware } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";
import { toggleThemeMode, setThemeMode, THEME_KEY } from "./themeSlice";
import { setStorage } from "@/shared/utils/storage";

/**
 * Middleware listener to handle theme-related side effects.
 * Monitors theme changes and synchronizes the state with local storage.
 */
const themeListener = createListenerMiddleware();

// Persists the current theme mode to local storage.
function saveTheme(mode: string) {
    setStorage(THEME_KEY, mode);
}

// Syncs storage after a theme toggle.
themeListener.startListening({
    actionCreator: toggleThemeMode,
    effect: (_, listenerApi) => {
        const state = listenerApi.getState() as RootState;
        saveTheme(state.theme.mode);
    },
});

// Syncs storage when a specific theme mode is explicitly set.
themeListener.startListening({
    actionCreator: setThemeMode,
    effect: (action) => {
        saveTheme(action.payload);
    },
});

export default themeListener;