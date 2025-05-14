// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = () => {
  const { token } = useAuth(); 
  // console.log(token)// or sessionStorage.getItem("authToken")

  return token ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
