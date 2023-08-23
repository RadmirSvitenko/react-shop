import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = (props) => {
  return <Outlet />;
};

MainLayout.propTypes = {};

export default MainLayout;
