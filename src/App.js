import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";

import Navigation from "./components/navigation/Navigation";
import { Route } from "react-router-dom";
import { render } from "@testing-library/react";
// import { Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Route
          exact
          path="/welcome/:name"
          render={(props) => (
            <Welcome {...props} name={props.match.params.name} />
          )}
        />

        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}
export default App;
