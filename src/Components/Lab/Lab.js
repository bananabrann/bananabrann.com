import React from 'react';
import { Link } from "react-router-dom";
import "./Lab.css";

const DOCUMENT_TITLE = "Bananabrann - Lab"
const HOME_PATH = "/"

class Lab extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
      <div className="Lab">

      </div>
    )
  }

  componentDidMount() {
    document.title = DOCUMENT_TITLE;
  }
}

export default Lab;
