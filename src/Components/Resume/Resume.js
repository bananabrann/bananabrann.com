import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import resumeJPG from "../../res/resume/resume_online.jpg";
import resumePDF from "../../res/resume/resume_online.pdf";
import resumeTXT from "../../res/resume/resume_online.txt";
import "./Resume.scss";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const DOCUMENT_TITLE = "bananabrann - Resume";
const HOME_PATH = "/";

class Resume extends React.Component {
    render() {
        return (
            <div className="Resume">
                <h1></h1>
            </div>
        );
    }

    componentDidMount() {
        document.title = DOCUMENT_TITLE;
    }
}

export default Resume;
