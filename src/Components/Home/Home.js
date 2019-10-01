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
        <div className="content-wrapper">
          <div className="home-left-area">
            <img alt="" src={bananaPicture} />
          </div>

          <div className="home-right-area">
            <Link to={RESUME_PATH}>
              <div className="home-nav-box-area">
                <h2>Resume</h2>
                <p>View or download resume</p>
              </div>
            </Link>
            <Link to={LABS_PATH}>
              <div className="home-nav-box-area">
                <h2>Lab</h2>
                <p>View projects and works</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="home-social-media-wrapper">
          {/* prettier-ignore */}
          <a href="https://www.linkedin.com/in/pbrann/"><img id="linkedin-logo" alt="Follow me on LinkedIn" src={linkedInPicture} /></a>
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.title = DOCUMENT_TITLE;
  }
}

export default Home;
