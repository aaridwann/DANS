import React from "react";
import NavbarComponent from "../Navbar/NavbarComponent";
import img_hero from "../../assets/img_hero.png";
import SlideShow from "../SlideShow/SlideShow";

function LayoutComponent({ children }) {
  return (
    <div className=" w-full bg-slate-50 min-h-screen">
      <div className="z-50 fixed px-4 w-full overflow-y-auto h-full">
        <NavbarComponent />
        {children}
      </div>
      <div className=" w-full md:h-80 h-52 bg-gradient-to-r from-cyan-500 overflow-hidden to-blue-500 fixed top-0 items-end justify-end ">
        {/* <img className=" flex items-end justify-end bottom-0 mx-auto w-full md:w-1/2 h-auto" src={img_hero}/> */}
        <SlideShow />
      </div>
    </div>
  );
}

export default LayoutComponent;
