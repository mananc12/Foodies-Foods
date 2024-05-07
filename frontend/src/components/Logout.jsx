import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Logout = () => {
  const { logoutUser } = useAuth();

  useEffect(() => {
    // Logout user when component mounts
    logoutUser();

    // Show a success toast
    toast.success("Logout Successful!");
  }, [logoutUser]);

  // Redirect to the home page
  return <Navigate to="/" />;
};

export default Logout;
