// src/components/PublicRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import ErrorPage from "../../Pages/Auth/NotFound";

const PublicRoutes = ({ element: Component, isAuthenticated, ...rest }) => {
  return !isAuthenticated ? <Component {...rest} /> : <ErrorPage />;
};

export default PublicRoutes;
