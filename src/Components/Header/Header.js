import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import bananaPic from "../../img/bananas.png";

const LINK_HOME = "/";
const LINK_RESUME = "/resume";

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        {/* <img src={bananaPic} id="bananas" alt="" /> */}
        <Link to={LINK_HOME}><span className="nav-item" id="button-home">Home</span></Link>
        <Link to={LINK_RESUME}><span className="nav-item" id="button-home">Resume</span></Link>
      </div>
    );
  }
}

export default Header;
