import React from 'react';
import { Link } from "react-router-dom";
import "./Lab.css";
import LabHeader from "./LabHeader/LabHeader"

const DOCUMENT_TITLE = "bananabrann - Lab"
const HOME_PATH = "/"

class Lab extends React.Component {
  constructor() {
    super();
    this.state = {
      isViewingAll: true,
      isViewingWebdev: false,
      isViewingAutomation: false,
      isViewingJS: false,
      isViewingJava: false,
      isViewingPython: false,
      isViewingBash: false
     };
  }

  render() {
    if (this.state.isViewingAll) {
      // Automation projects
    } else {
      if (this.state.isViewingAutomation) {
        // 
      }
    }

    return (
      <div className="Lab">
        <LabHeader></LabHeader>
      </div>
    )
  }

  componentDidMount() {
    document.title = DOCUMENT_TITLE;
  }
}

export default Lab;
