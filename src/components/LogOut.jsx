import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const LogOut = () => {
  useEffect(() => {
    localStorage.clear();
    window.location.reload();
  }, []);
  return <Navigate to="/" />;
};

export default LogOut;
