import React from "react";
import { useAppSelector } from "@/app/hooks";
import { selectIsDarkMode } from "../themeSlice";

/**
 * Keeps the DOM theme class in sync with global state.
 * This isolates DOM writes and avoids duplicating effects in UI components.
 */
function ThemeSync() {
  const isDark = useAppSelector(selectIsDarkMode);

  // set dark/light in html element & save it in localStorage
  React.useEffect(() => {
    window.document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return null;
}

export default React.memo(ThemeSync);
