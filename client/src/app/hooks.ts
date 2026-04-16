import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// Typed version of useDispatch & useSelector
// Ensures dispatch only accepts valid AppDispatch actions (including thunks)
export const useAppDispatch: () => AppDispatch = useDispatch;

// Automatically infers RootState shape for safe and auto-completed state selection
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;