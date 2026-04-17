import { useSyncExternalStore } from "react";

/**
 * A custom hook that tracks the state of a CSS media query. *
 * @param {string} query - The CSS media query string to monitor.
 * @returns {boolean} - Returns true if the media query matches, false otherwise.
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    // The 'subscribe' function: Registers a callback when the media query state changes.
    (callback) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", callback);

      // Cleanup: Removes the listener when the component unmounts or query changes.
      return () => media.removeEventListener("change", callback);
    },

    // The 'getSnapshot' function: Returns the current value from the browser API.
    () => window.matchMedia(query).matches,

    // The 'getServerSnapshot' function: Default value for Server-Side Rendering (SSR).
    // Usually false, as there is no "window" or "screen" on the server.
    () => false,
  );
}
