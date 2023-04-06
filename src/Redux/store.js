import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./features/Auth/AuthSlice";

export default configureStore({
  reducer: {
    auth: AuthSlice,
  },
});
