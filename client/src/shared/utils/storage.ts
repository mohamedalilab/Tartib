/**
 * Safe wrapper around Web Storage (localStorage)
 * - SSR-safe (checks for window existence)
 * - Supports JSON values
 * - Prevents runtime crashes with try/catch
 */

export const isBrowser = typeof window !== "undefined";

/**
 * Save a value to localStorage
 * @param key - storage key
 * @param value - any serializable value
 */
export function setStorage<T>(key: string, value: T): void {
    if (!isBrowser) return;

    try {
        // make sure is string or may be object or array need to be in JSON format
        const serialized =
            typeof value === "string" ? value : JSON.stringify(value);

        window.localStorage.setItem(key, serialized);
    } catch (error) {
        console.error("setStorage error:", error);
    }
}

/**
 * Read a value from localStorage
 * @param key - storage key
 * @returns parsed value or null if not found
 */
export function getStorage<T>(key: string): T | null {
    if (!isBrowser) return null;

    try {
        const item = window.localStorage.getItem(key);
        if (!item) return null;

        return JSON.parse(item) as T;

    } catch (error) {
        console.error("getStorage error:", error);
        return null;
    }
}

/**
 * Remove a value from localStorage
 * @param key - storage key
 */
export function removeStorage(key: string): void {
    if (!isBrowser) return;

    try {
        window.localStorage.removeItem(key);
    } catch (error) {
        console.error("removeStorage error:", error);
    }
}

/**
 * Clear all localStorage
 * @warning Use carefully (affects entire app/domain)
 */
export function clearStorage(): void {
    if (!isBrowser) return;

    try {
        window.localStorage.clear();
    } catch (error) {
        console.error("clearStorage error:", error);
    }
}