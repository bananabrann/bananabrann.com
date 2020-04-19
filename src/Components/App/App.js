import React, { Component } from "react";
import { Route } from "react-router-dom";
// import Header from "../Header/Header"
import Home from "../Home/Home";
import Resume from "../Resume/Resume";

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
                <Route path="/resume" exact component={Resume} render={routerProps => <Resume />} />
            </div>
        );
    }
}

export default App;
