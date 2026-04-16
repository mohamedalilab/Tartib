import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import themeListener from "@/features/themeSlice/themeListener";

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV, middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(themeListener.middleware),
});

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
