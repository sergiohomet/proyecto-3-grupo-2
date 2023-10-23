import React from "react";
import { Navigate, Outlet } from "react-router";
import { getUserData } from "../hooks/getUserData";

const PrivateRoutes = () => {
  const isAuth = localStorage.getItem("token");
  const userData = getUserData();

  if (isAuth) {
    if (userData && (userData.rol === "admin" || userData.rol === "dueno")) {
      return <Outlet />;
    } else if (userData && userData.rol === "user") {
      return <Navigate to="/" />
    }
  }

  return <Navigate to="/login" />;
};

export default PrivateRoutes;