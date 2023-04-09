import { createSlice } from "@reduxjs/toolkit";
import { initialStateError } from "./ErrorConfig";

export const ErrorSlice = createSlice({
  name: "error",
  initialState: initialStateError,
  reducers: {
    SET_ERROR: (state, { payload }) => ({
      ...state,
      error: true,
      warning: false,
      message: payload.message,
    }),
    SET_WARNING: (state, { payload }) => ({
      ...state,
      error: false,
      warning: true,
      message: payload.message,
    }),
    CLEAR_WARNING: (state, { payload }) => ({
      ...state,
      error: false,
      warning: false,
      message: "",
    }),
  },
});

export const { SET_ERROR, SET_WARNING, CLEAR_WARNING } = ErrorSlice.actions;
export default ErrorSlice.reducer;
