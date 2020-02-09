import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import bananaPic from "../../res/img/bananas.png";

const LINK_HOME = "/";
const LINK_RESUME = "/resume";
const LINK_LAB = "/lab";

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        {/* <img src={bananaPic} id="bananas" alt="" /> */}
        <Link to={LINK_HOME}>
          <span className="nav-item" id="button-home">
            <i class="fas fa-home"></i>
            Home
          </span>
        </Link>
        <Link to={LINK_RESUME}>
          <span className="nav-item" id="button-resume">
            <i class="fas fa-paperclip"></i>
            Resume
          </span>
        </Link>
        {/* <Link to={LINK_LAB}>
          <span className="nav-item" id="button-lab">
          <i class="fas fa-vial"></i>
            Works
          </span>
        </Link> */}
      </div>
    );
  }
}

export default Header;
