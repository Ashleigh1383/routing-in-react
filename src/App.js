import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Page404 from "./components/page404/Page404";
import Navigation from "./components/navigation/Navigation";
import { Route, BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route
            path="/welcome/:name"
            render={(props) => (
              <Welcome {...props} name={props.match.params.name} />
            )}
          />
          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props} name="Test" />}
          />

          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}
export default App;
