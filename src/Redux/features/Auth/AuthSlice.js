import { createSlice } from "@reduxjs/toolkit";
import { initialValue } from "./AuthSliceConfig";

export const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialValue,
  reducers: {
    LOGIN_ACTION: (state, { payload }) => ({
      ...state,
      isLogin: true,
      ...payload,
    }),
    LOGOUT_ACTION: () => ({ isLogin: false }),
  },
});

export const { LOGIN_ACTION, LOGOUT_ACTION } = AuthSlice.actions;
export default AuthSlice.reducer;
