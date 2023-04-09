import { createSlice } from "@reduxjs/toolkit";
import { initialStateLoading } from "./LoadingSliceConfig";

export const LoadingSlice = createSlice({
  name: "Loading",
  initialState: initialStateLoading,
  reducers: {
    LOADING_ON: () => ({ LoadingState: true }),
    LOADING_OFF: () => ({ LoadingState: false }),
  },
});

export const { LOADING_ON, LOADING_OFF } = LoadingSlice.actions;
export default LoadingSlice.reducer;
