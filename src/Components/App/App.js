import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
import Resume from "../Resume/Resume";
import Lab from "../Lab/Lab";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Home} renter={routerProps => <Home />} />
        <Route path="/resume" exact component={Resume} renter={routerProps => <Resume />} />
        <Route path="/lab" exact component={Lab} renter={routerProps => <Lab />}/>
      </div>
    );
  }
}

export default App;
