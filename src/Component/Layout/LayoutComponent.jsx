import React, { useEffect } from "react";
import NavbarComponent from "../Navbar/NavbarComponent";
import SlideShow from "../SlideShow/SlideShow";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import { useDispatch, useSelector } from "react-redux";
import ToastComponent from "../Toast/ToastComponent";
import { LOADING_ON } from "../../Redux/features/Loading/LoadingSlice";
import { store } from "../../Redux/store";

function LayoutComponent({ children }) {
  
  return (
    <div className=" w-full bg-slate-50 h-screen">
      <LoadingComponent />
      <div className="z-50 transition-all fixed px-4 w-full overflow-y-auto h-full">
        <ToastComponent />
        <NavbarComponent />
        {children}
      </div>
      <div className=" w-full md:h-80 h-52 bg-gradient-to-r from-cyan-500 overflow-hidden to-blue-500 fixed top-0 items-end justify-end ">
        <SlideShow />
      </div>
    </div>
  );
}

export default LayoutComponent;
