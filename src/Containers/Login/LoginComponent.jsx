import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { LOGIN_ACTION } from "../../Redux/features/Auth/AuthSlice";
import google from "../../assets/google.png";
import { SET_ERROR } from "../../Redux/features/Error/ErrorSlice";
import { store } from "../../Redux/store";

function LoginComponent() {
  const dispatch = useDispatch();
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      dispatch(LOGIN_ACTION(codeResponse));
    },
    onError: () => store.dispatch(SET_ERROR({ message: "Login Error" })),
  });
  const _renderGooglePng = <img src={google} className=" w-6 h-auto" />;
  const _renderButtonGoogle = () => (
    <button
      className=" border border-slate-100 hover:bg-slate-300 duration-300 px-4 py-2 rounded-lg flex gap-4"
      onClick={() => login()}
    >
      Sign in with Google {_renderGooglePng}
    </button>
  );

  return (
    <div className=" max-w-lg mx-auto flex-col bg-white pb-8 h-fit mt-32 md:mt-48 shadow-lg rounded-xl drop-shadow-xl flex items-center justify-center p-4">
      <p className=" mb-4">Please Login</p>
      {_renderButtonGoogle()}
    </div>
  );
}

export default LoginComponent;
