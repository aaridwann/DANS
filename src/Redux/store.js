import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import AuthSlice from "./features/Auth/AuthSlice";
import ErrorSlice from "./features/Error/ErrorSlice";
import LoadingSlice from "./features/Loading/LoadingSlice";

const persistAuthConfig = {
  key: "auth",
  storage: storage,
};

const authPersistReducer = persistReducer(persistAuthConfig, AuthSlice);

const rootReducer = {
  auth: authPersistReducer,
  loading: LoadingSlice ,
  error: ErrorSlice,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
