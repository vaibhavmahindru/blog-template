import React, { Component } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="navbar">
          <a href="#" className="option">
            Home
          </a>
          <a href="#" className="option">
            About
          </a>
          <a href="#" className="option">
            Projects
          </a>
        </div>
        <div className="social-icons">
          <a className="github" target="_b" href="#">
            <FaGithub />
          </a>
          <a className="instagram" target="_b" href="#">
            <FaInstagram />
          </a>
          <a className="linkedin" target="_b" href="#">
            <FaLinkedin />
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;
