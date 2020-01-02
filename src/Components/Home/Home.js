import React from "react";
import { Link } from "react-router-dom";
import linkedInPicture from "../../img/linkedin.png";
import cubeGif from "../../img/cube.gif";
import "./Home.css";

const DOCUMENT_TITLE = "Bananabrann - Home";
const RESUME_PATH = "/resume";
const LABS_PATH = "/lab";

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Home">
        <img src={cubeGif} />
        <a href="https://www.linkedin.com/in/pbrann/">
          {/* prettier-ignore */}
          <img id="linkedin-logo" alt="Follow me on LinkedIn" src={linkedInPicture} />
        </a>

      </div>
    );
  }

  componentDidMount() {
    document.title = DOCUMENT_TITLE;
  }
}

export default Home;
