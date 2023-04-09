import React from "react";
import WithDetailsContainer from "./DetailsContainer";
import back from "../../assets/back.png";
import { Navigate } from "react-router-dom";
import { PATH_NAME } from "../../Routes/RoutesConfig";

function DetailsComponent(Props) {
  const _renderHero = () => {
    return (
      <div
        className={`absolute text-center overflow-y-scroll flex-col gap-1 rounded-xl p-4 right-0 bottom-0 left-0 mt-40 mx-auto transition-transform duration-700 w-full h-[600px] bg-white drop-shadow-xl shadow-xl`}
      >
        <img
          onClick={() => Props.method.navigate(PATH_NAME.JOBS)}
          src={back}
          className=" h-10 w-auto ml-8 cursor-pointer absolute"
        />
        <h2 className="text-xl">{Props.company}</h2>
        <p className="text-xs px-8 mb-4 text-left mt-10">{Props.description}</p>
        <p>{Props.how_to_apply}</p>
      </div>
    );
  };

  return (
    // <div className="w-full h-screen relative overflow-hidden flex flex-col gap-2">
    <_renderHero />
    // </div>
  );
}

export default WithDetailsContainer(DetailsComponent);
