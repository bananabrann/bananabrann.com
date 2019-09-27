import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    render() {
        return(
            <div className="App">
                <Route path="/" exact component={Home} renter={routerProps => (<Home />)}/>
            </div>
        )
    }
}

export default App;
