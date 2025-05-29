import React from "react";
import { Navigate } from "react-router-dom";
import ErrorPage from "../../Pages/Auth/NotFound";

const AuthRoutes = ({ element: Component, isAuthenticated, ...rest }) => {
  return isAuthenticated ? <Component {...rest} /> : <ErrorPage />;
};

export default AuthRoutes;
