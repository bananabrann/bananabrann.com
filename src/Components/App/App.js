import React, { Component } from "react";
import { Route } from "react-router-dom";
// import Header from "../Header/Header"
import Home from "../Home/Home";

import "./App.scss";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                {/* prettier-ignore */}
                <Route path="/" exact component={Home} render={routerProps => <Home />} />

                {/* prettier-ignore */}
                {/* <Route path="/resume" exact component={Resume} render={routerProps => <Resume />} /> */}
                {/* prettier-ignore */}
                {/* <Route path="/lab" exact component={Lab} render={routerProps => <Lab />}/> */}
            </div>
        );
    }
}

export default App;
