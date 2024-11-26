import React from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const PublicRoute = ({ children }) => {
  const currentUser = AuthService.getCurrentUser();

  if (currentUser) {
    // Redirect logged-in users to their profile page
    return <Navigate to="/profile" />;
  }

  return children;
};

export default PublicRoute;
