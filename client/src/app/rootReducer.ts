import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice/themeSlice";

/**
*  @desc Turns an object whose values are different reducer functions, into a single reducer function.
*  @param reducers - An object whose values correspond to different reducer functions
*  @returns A reducer function that invokes every reducer inside the passed object
*/

export const rootReducer = combineReducers({
  theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
