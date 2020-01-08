import React from "react";
import { Link } from "react-router-dom";
import linkedInPicture from "../../res/img/linkedin.png";
import githubLogo from "../../res/img/github.png";
import cubeGif from "../../res/img/cube.gif";
import techStack from "../../res/img/techstack.png";
import "./Home.scss";

const DOCUMENT_TITLE = "bananabrann - Home";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div id="upper">
          <img src={cubeGif} id="cube" alt="" />
          <p>Pierson Lee Brannan</p>
          <img src={techStack} id="techstack" alt="" />
        </div>

        <div id="lower">
          <a href="https://www.linkedin.com/in/pbrann/">
            {/* prettier-ignore */}
            <img className="logo" id="linkedin" alt="Follow me on LinkedIn" src={linkedInPicture} />
          </a>
          <a href="https://www.github.com/bananabrann">
            {/* prettier-ignore */}
            <img className="logo" id="github" alt="Visit my GitHub" src={githubLogo} />
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
