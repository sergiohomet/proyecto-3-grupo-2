import React from "react";
import { Navigate, Outlet } from "react-router";

const PrivateRoutes = () => {
  const isAuth = localStorage.getItem("token");
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
