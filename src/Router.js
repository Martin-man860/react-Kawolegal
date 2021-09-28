import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Startup from "./Pages/Startup";

function Router(props) {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/Startup" component={Startup} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/Login" component={Login} />
    </BrowserRouter>
  );
}

export default Router;