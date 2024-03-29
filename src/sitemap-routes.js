import React from "react";
import { Switch, Route } from "react-router";

export default (
  <Switch>
    <Route path="/" />
    <Route path="/navigation"/>
    <Route path="/about" />
    <Route path="/portfolio" />
    <Route path="/contact" />
  </Switch>
);
