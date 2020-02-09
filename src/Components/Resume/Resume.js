import React from "react";
import { Link } from "react-router-dom";
import resumeJPG from "../../res/resume/resume_online.jpg";
import resumePDF from "../../res/resume/resume_online.pdf";
import resumeTXT from "../../res/resume/resume_online.txt";
import "./Resume.css";

const DOCUMENT_TITLE = "bananabrann - Resume";
const HOME_PATH = "/";

class Resume extends React.Component {
  constructor() {
    super()
    this.zoomIn = this.zoomIn.bind(this)
    this.zoomOut = this.zoomOut.bind(this)
  }

  zoomIn() {
    let myImg = document.getElementById("resume")
    let currWidth = myImg.clientWidth
    console.log(currWidth)
    if(currWidth > 1500) {
      alert("Maximum zoom-in level reached!")
    }

    myImg.style.width = (currWidth + 50) + "px"
    
  }

  zoomOut() {
    let myImg = document.getElementById("resume")
    let currWidth = myImg.clientWidth
    console.log(currWidth)
    if(currWidth > 1500) {
      alert("Maximum zoom-out level reached!")
    } else {
      myImg.style.width = (currWidth -50) + "px"
    }
  }

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
          <button id="zoom-in" type="button" onClick={() => this.zoomIn()}><i class="fas fa-search-plus"></i></button>
          <button id="zoom-out" type="button" onClick={() => this.zoomOut()}><i class="fas fa-search-minus"></i></button>
        </div>
        <img
          id="resume"
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
