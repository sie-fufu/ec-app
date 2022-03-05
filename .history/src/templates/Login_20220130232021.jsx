import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Login = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  console.log(selector.router);

  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={() => dispatch(push("/"))}>ログイン</button>
    </div>
  );
};

export default Login;
