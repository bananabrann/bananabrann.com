import React from 'react';
import { Link } from "react-router-dom";
import resumePNG from "../../res/resume-online.jpg";
import "./Resume.css";

const DOCUMENT_TITLE = "Bananabrann - Resume";
const HOME_PATH = "/";

class Resume extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return(
      <div className="Resume">
        <nav className="header">
          <div className="buttons">
            <button><a href={resumePNG} download>Download JPG</a></button>
            <button><a href={resumePNG} download>Download TXT</a></button>
            <button><a href={resumePNG} download>Download Word</a></button>
          </div>
          {/* <div className="contact">
            <h5>To contact me, please email me at <b>foo@bananabrann.com</b>
            </h5>
          </div> */}
        </nav>
        <img alt="Pierson Brannan's resume. Download the resume instead via the 'download' button above" src={resumePNG} />
      </div>
    )
  }

  componentDidMount() {
    document.title = DOCUMENT_TITLE;
  }
}

export default Resume;