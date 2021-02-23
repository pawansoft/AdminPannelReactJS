import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import LogIn from "./component/logIn/LogIn.jsx";
import Dashboard from "./component/dashboard/dashboard.jsx";
import PrivateRoute from "./component/PrivateRoute.jsx";
import history from "./History.js";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard/main" component={() => <Dashboard />} />
          </Route>
          <Route exact path="/logIn" component={LogIn} />
          <PrivateRoute
            exact={false}
            path="/dashboard"
            redirectPath="/logIn"
            condition={
              localStorage.getItem("adminId") &&
              localStorage.getItem("adminId").length
            }
            component={() => <Dashboard />}
          />
        
        </Switch>
      </Router>
      
      
    );
  }
}
