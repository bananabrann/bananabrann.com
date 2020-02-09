import React from "react";
import { Link } from "react-router-dom";
import resumeJPG from "../../res/resume/resume_online.jpg";
import resumePDF from "../../res/resume/resume_online.pdf";
import resumeTXT from "../../res/resume/resume_online.txt";
import "./Resume.css";

const DOCUMENT_TITLE = "bananabrann - Resume";
const HOME_PATH = "/";

class Resume extends React.Component {
  render() {
    return (
      <div className="Resume">
        <div className="buttons">
          {/* prettier-ignore */}
          <button><a href={resumePDF} download>Download PDF</a></button>
          {/* prettier-ignore */}
          <button><a href={resumeJPG} download>Download JPG</a></button>
          {/* prettier-ignore */}
          <button><a href={resumeTXT} download>Download TXT</a></button>
        </div>
        <div className="zoom-buttons">
          <button id="zoom-in" type="button" onclick="zoomIn()"><i class="fas fa-search-plus"></i></button>
          <button id="zoom-out" type="button" onclick="zoomOut()"><i class="fas fa-search-minus"></i></button>
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
