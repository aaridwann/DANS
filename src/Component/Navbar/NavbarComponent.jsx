import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_ACTION } from "../../Redux/features/Auth/AuthSlice";
import { useLocation } from "react-router-dom";
import { PATH_NAME } from "../../Routes/RoutesConfig";

function NavbarComponent() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const isLogin = auth.isLogin == true;
  const _renderLogoutButton = () => {
    return (
      isLogin && (
        <li
          className="bg-white text-cyan-500 p-1 px-3 rounded-xl "
          onClick={Logout}
        >
          {isLogin && "Logout"}
        </li>
      )
    );
  };

  function Logout() {
    dispatch(LOGOUT_ACTION());
  }

  const _renderTitleCompany = () => <h2>DANS Job Portals</h2>;

  const _renderMenu = () => (
    <ul className=" flex justify-center items-center gap-4">
      {_renderLogoutButton()}
    </ul>
  );

  return (
    <nav className="mt-4 bg max-w-5xl p-4 mx-auto h-10 flex rounded-xl items-center justify-between bg-white/50 text-gray-500">
      <_renderTitleCompany />
      <_renderMenu />
    </nav>
  );
}

export default NavbarComponent;
