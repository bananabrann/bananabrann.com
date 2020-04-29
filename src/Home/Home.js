import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Home.scss";

class Home extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="Home">
        <canvas id="demo-canvas" />
        <h1 className="yellow">Pierson L. Brannan</h1>
        <p>
          Hi there! I'm Pierson. A Software Developer, prior U.S. Marine, former
          professional tuba player, and aquarium lover.
        </p>
        <p>
          I'm self-taught and self-made, I don't own nine tech startups, and I
          don't have an arbitrary LinkedIn job description. I like coding, and
          enjoy figuring things out.
        </p>
        <h4 className="emerald">Let's connect!</h4>
        <span id="social-media">
          <a href="https://linkedin.com/in/pbrann"><p>LinkedIn</p></a>
          <a href="https://github.com/bananabrann"><p>GitHub</p></a>
        </span>
  
        {/* <Link to="/lab">
          <h3 className="grape">Lab</h3>
        </Link> */}
      </div>
    );
  }
}

export default Home;
