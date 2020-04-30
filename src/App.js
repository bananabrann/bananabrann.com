import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home/Home"
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

      </div>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
