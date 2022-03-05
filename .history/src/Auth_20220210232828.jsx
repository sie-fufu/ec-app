import React from "react";
import { useSelector } from "react-redux";

const Auth = ({ children }) => {
  const selector = useSelector((state) => state);
  return children;
};

export default Auth;
