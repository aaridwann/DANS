import { Route, Routes } from "react-router-dom";
import React from "react";
import { AuthWrapper } from "./RoutesWrapper";
import { Route_map } from "./RoutesConfig";

const Router = () => {
  return (
    <AuthWrapper>
      <Routes>
        {Route_map.map(({ path, element }) => (
          <React.Fragment key={path}>
            <Route path={path} element={element} />
          </React.Fragment>
        ))}
      </Routes>
    </AuthWrapper>
  );
};

export default Router;
