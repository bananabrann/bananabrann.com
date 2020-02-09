import React from "react";
import { Link } from "react-router-dom";
import cubeGif from "../../res/img/cube.gif";
import "./Home.scss";

const DOCUMENT_TITLE = "bananabrann - Home";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div id="upper">
          <img src={cubeGif} id="cube" alt="" />
          <p><b>Pierson L. Brannan</b></p>
          <p id="welcome-message"> –– Self-taught software engineer, prior professional tuba player and U.S. Marine.</p>
        </div>

        <div id="lower">
          <a href="https://www.linkedin.com/in/pbrann/">
            <i class="fab fa-linkedin-in fa-3x"></i>
          </a>
          <a href="https://www.github.com/bananabrann">
            <i class="fab fa-github-alt fa-3x"></i>
          </a>
          <a href="https://stackoverflow.com/users/11057120/bananabrann?tab=profile">
            <i class="fab fa-stack-overflow fa-3x"></i>
          </a>
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.title = DOCUMENT_TITLE;
  }
}

export default Home;
