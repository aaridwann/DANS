import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import LayoutComponent from '../Component/Layout/LayoutComponent'
import { PATH_NAME } from "./RoutesConfig";

export const AuthWrapper = ({ children }) => {
  const { auth } = useSelector((state) => state);
  const location = useLocation();
  const isUnAuthorize = !auth.isLogin && location.pathname !== PATH_NAME.LOGIN
  const isAuthorize = auth.isLogin && location.pathname === PATH_NAME.LOGIN || location.pathname === PATH_NAME.HOME
  if (isUnAuthorize) return <Navigate to={PATH_NAME.LOGIN} state={{ from: location }} replace={true} />;
  if (isAuthorize) return <Navigate to={PATH_NAME.JOBS} state={{ from: location }} replace={true} />;
  const Layout = <LayoutComponent>{children}</LayoutComponent>
  
  return Layout
};
