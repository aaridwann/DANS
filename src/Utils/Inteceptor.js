import axios from "axios";
import { store } from "../Redux/store";
import {
  LOADING_OFF,
  LOADING_ON,
} from "../Redux/features/Loading/LoadingSlice";
import { SET_ERROR } from "../Redux/features/Error/ErrorSlice";
const AppAxios = axios.create();

AppAxios.interceptors.request.use(
  function (config) {
    store.dispatch(LOADING_ON());
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
AppAxios.interceptors.response.use(
  function (response) {
    store.dispatch(LOADING_OFF());
    return response;
  },
  function (error) {
    store.dispatch(LOADING_OFF());
    store.dispatch(SET_ERROR({ message: error.message }));
    return Promise.reject(error);
  }
);
export { AppAxios };
