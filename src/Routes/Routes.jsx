import { Navigate, Route, Routes, createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "../App";
import LoginComponent from "../Containers/Login/LoginComponent";
import DetailsComponent from "../Containers/DetailsJob/DetailsComponent";
import HomeComponent from "../Containers/Home/HomeComponent";
import JobsComponent from "../Containers/Jobs/JobsComponent";
import { AuthWrapper } from "./RoutesWrapper";

const Router = () => {
  return (
    <AuthWrapper>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/jobs" element={<JobsComponent />} />
        <Route path="/jobs:id" element={<DetailsComponent />} />
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </AuthWrapper>
  );
};

export default Router;
