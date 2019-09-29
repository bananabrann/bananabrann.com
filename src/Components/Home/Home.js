import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const DOCUMENT_TITLE = "BananaBrann.com";
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
        <div className="home-left-area"></div>

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
    );
  }

  componentDidMount() {
    document.title = DOCUMENT_TITLE;
  }
}

export default Home;
