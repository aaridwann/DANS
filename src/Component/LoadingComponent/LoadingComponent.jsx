import React from "react";
import { useSelector } from "react-redux";
import loading from "../../assets/loading.gif";

const _renderComponent = () => {
  return (
    <div className="absolute flex flex-col z-[500] items-center mx-auto justify-center bg-white/50 w-screen h-screen p-4">
      <img className=" w-20 h-auto mb-4" src={loading} />
      <h1 className=" text-2xl text-cyan-600 shadow-cyan-800  drop-shadow-2xl">
        LOADING....
      </h1>
    </div>
  );
};
function LoadingComponent() {
  const { loading } = useSelector((state) => state);
  const { LoadingState } = loading;
  const _renderLoading = LoadingState && _renderComponent();
  return _renderLoading;
}

export default LoadingComponent;
