import React from "react";
import { Route, Switch } from "react-router";
import { Login, Home } from "./templates";
import { LoginContainer } from "./containers";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/login"} component={LoginContainer} />
      {/* <Route path="/posts/:id" component={Post} /> */}
      <Route exact path={"(/)?"} component={Home} />
    </Switch>
  );
};

export default Router;
