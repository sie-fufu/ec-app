import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getIsSignedIn } from "./reducks/users/selectors";

const Auth = ({ children }) => {
  const selector = useSelector((state) => state);
  const inSignedIn = getIsSignedIn(selector)

  useEffect(() => {
    if (!isSignedIn)
  }, [])
  return children;
};

export default Auth;
