import React from "react";
import { Link } from "react-router-dom";
import resumeJPG from "../../res/resume/resume_online.jpg";
import resumePDF from "../../res/resume/resume_online.pdf";
import resumeTXT from "../../res/resume/resume_online.txt";
import "./Resume.css"

const DOCUMENT_TITLE = "bananabrann - Resume";
const HOME_PATH = "/";

class Resume extends React.Component {
  constructor() {
    super()
    this.state = {
      firstFunnyMessage: true,
      secondFunnyMessage: false,
      thirdFunnyMessage: false
    }

    this.zoomIn = this.zoomIn.bind(this)
    this.zoomOut = this.zoomOut.bind(this)
  }

  zoomIn() {
    let myImg = document.getElementById("resume")
    let currWidth = myImg.clientWidth
    console.log(currWidth)
    console.log(this.state)

    if (currWidth > 1500 && this.state.firstFunnyMessage) {
      alert("You cannot go any further! I mean, you can... but do you really need it that big?")
      this.setState({
        firstFunnyMessage: false,
        secondFunnyMessage: true
      })
    } else if (currWidth > 2000 && this.state.secondFunnyMessage) {
      alert("Dang. You're still going? Look. The code allows for it, but at this point is it really necessary?")
      this.setState({
        secondFunnyMessage: false,
        thirdFunnyMessage: true
      })
    } else if (currWidth > 3500 && this.state.thirdFunnyMessage) {
      alert("Alright. I'm done. Keep going if you want. But I'm THROUGH zooming in for you!")
      this.setState({
        thirdFunnyMessage: false
      })
    }

    myImg.style.width = (currWidth + 50) + "px"
  }

  zoomOut() {
    let myImg = document.getElementById("resume")
    let currWidth = myImg.clientWidth
    myImg.style.width = (currWidth - 50) + "px"

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
