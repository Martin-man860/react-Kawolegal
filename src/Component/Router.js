import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Startup from "../Pages/Startup"

function Router() {
    return (
        <div>
            <BrowserRouter>
              <Link to="/">Home</Link>
              <Link to="/Login">Login</Link>
              <Link to="/Register">Register</Link>
              <Link to="/Startup">Startup</Link>

              <Route exact={true} path="/" component={Home} />
              <Route path="/About" component={Login} />
              <Route path="/Contact" component={Register} />
              <Route path="/Service" component={Startup} />
            </BrowserRouter>
        </div>
    )
}

export default Router;