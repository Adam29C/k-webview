// src/components/RedirectIfAuthenticated.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const RedirectIfAuthenticated = ({ children }) => {
  const { token } = useAuth();

  if (token) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default RedirectIfAuthenticated;
