import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import Orders from "./containers/Orders";

function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/orders" component={Orders} />
    </Router>
  );
}

export default Routes;
