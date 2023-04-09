import DetailsComponent from "../Containers/DetailsJob/DetailsComponent";
import HomeComponent from "../Containers/Home/HomeComponent";
import JobsComponent from "../Containers/Jobs/JobsComponent";
import React from "react";
import LoginComponent from "../Containers/Login/LoginComponent";

const PATH_NAME = {
  HOME: "/",
  JOBS: "/jobs",
  DETAILS_JOBS: "/jobs-details",
  LOGIN: "/login",
};

const Route_map = [
  { path: PATH_NAME.HOME, element: <HomeComponent /> },
  { path: PATH_NAME.JOBS, element: <JobsComponent /> },
  { path: PATH_NAME.DETAILS_JOBS, element: <DetailsComponent /> },
  { path: PATH_NAME.LOGIN, element: <LoginComponent /> },
];

export { Route_map, PATH_NAME };
