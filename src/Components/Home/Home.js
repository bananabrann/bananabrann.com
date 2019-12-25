import React from "react";
import { Link } from "react-router-dom";
import bananaPicture from "../../img/bananas.png";
import linkedInPicture from "../../img/linkedin.png";
import "./Home.css";
import "./HomeMobile.css";

const DOCUMENT_TITLE = "Bananabrann - Home";
const RESUME_PATH = "/resume";
const LABS_PATH = "/lab";

class Home extends React.Component {
  constructor() {
    super();
    this.state = { someKey: "someValue" };
  }

  render() {
    return (
      <div className="Home">
          {/* prettier-ignore */}
          <a href="https://www.linkedin.com/in/pbrann/"><img id="linkedin-logo" alt="Follow me on LinkedIn" src={linkedInPicture} /></a>
      </div>
    );
  }

  componentDidMount() {
    document.title = DOCUMENT_TITLE;
  }
}

export default Home;
