import React from "react";
import { Link } from "react-router-dom";
import resumeJPG from "../../res/resume.jpg";
import "./Resume.css";

const DOCUMENT_TITLE = "bananabrann - Resume";
const HOME_PATH = "/";

class Resume extends React.Component {
  render() {
    return (
      <div className="Resume">
        <div className="buttons">
          {/* prettier-ignore */}
          <button><a href={resumeJPG} download>Download JPG</a></button>
          {/* prettier-ignore */}
          <button><a href={resumeJPG} download>Download TXT</a></button>
          {/* prettier-ignore */}
          <button><a href={resumeJPG} download>Download Word</a></button>
        </div>
        <img
          alt="Pierson Brannan's resume. Download the resume instead via the 'download' button above"
          src={resumeJPG}
        />
      </div>
    );
  }

  componentDidMount() {
    document.title = DOCUMENT_TITLE;
  }
}

export default Resume;
