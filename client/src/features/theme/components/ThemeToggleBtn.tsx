import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectIsDarkMode, toggleThemeMode } from "../themeSlice";
import { Moon, Sun } from "lucide-react";

export function ThemeToggleBtn() {

    const dispatch = useAppDispatch();
    const isDark = useAppSelector(selectIsDarkMode);

    // handle toggle theme
    const onToggle = () => {
        dispatch(toggleThemeMode());
    };

    return (
        <button
            onClick={onToggle}
            className="btn bg-surface-container-highest p-2.5 rounded-lg hover:bg-surface-container-high transition-colors"
            aria-label="Toggle Theme"
        >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}