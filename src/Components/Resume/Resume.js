import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header"
import resumeJPG from "../../res/resume/resume_online.jpg";
import resumePDF from "../../res/resume/resume_online.pdf";
import resumeTXT from "../../res/resume/resume_online.txt";
import "./Resume.css"

import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"

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

    myImg.style.width = (currWidth + 150) + "px"
  }

  zoomOut() {
    let myImg = document.getElementById("resume")
    let currWidth = myImg.clientWidth
    myImg.style.width = (currWidth - 150) + "px"

  }

  render() {
    return (
      <div className="Resume">
        <ButtonGroup size="lg">
          <Button variant="secondary"><Link to="/"><i class="fas fa-home"></i> Return</Link></Button>
          <Button variant="secondary" onClick={() => this.zoomIn()}><i class="fas fa-search-plus fa-1x"></i></Button>
          <Button variant="secondary" onClick={() => this.zoomOut()}><i class="fas fa-search-minus fa-1x"></i></Button>

          <DropdownButton 
            as={ButtonGroup}
            variant="secondary"
            size="lg"
            title={<> <i class="fas fa-download fa-1x"></i> <span>Download...</span> </>}
            id="bg-nested-dropdown"
          >
            <Dropdown.Item eventKey="1" href={resumePDF} download>as pdf</Dropdown.Item>
            <Dropdown.Item eventKey="2" href={resumeJPG} download>as jpg</Dropdown.Item>
            <Dropdown.Item eventKey="3" href={resumeTXT} download>as txt</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item disabled>Not being prompted?<br/>
            Long hold (mobile) or right-click (Desktop)<br/>
            and "Save as..." or "Open in new tab"</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
      
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
