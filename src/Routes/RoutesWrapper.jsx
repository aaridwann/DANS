import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import LayoutComponent from '../Component/Layout/LayoutComponent'

export const AuthWrapper = ({ children }) => {
  const { auth } = useSelector((state) => state);
  const location = useLocation();
  const isUnAuthorize = !auth.isLogin && location.pathname !== "/login" && location.pathname !== "/"
  const isAuthorize = auth.isLogin && location.pathname == "/login"
  if (!isUnAuthorize) return <Navigate to={"/login"} state={{ from: location }} replace={true} />;
  if (isAuthorize) return <Navigate to={"/"} state={{ from: location }} replace={true} />;
  return <LayoutComponent>{children}</LayoutComponent>
};
