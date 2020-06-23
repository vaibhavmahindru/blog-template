import React, { Component } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import About from "./about.js";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h1>Vaibhav Mahindru</h1>
        <p>
          aspiring developer || cs undergrad <br />
          <br /> otaku || keen learner
        </p>
        <div className="navbar">
          <a href="#blog" className="option">
            Blog
          </a>
          <a href={<About />} className="option">
            About
          </a>
          <a href="#" className="option">
            Projects
          </a>
        </div>
        <h2>
          Contact me:-
          <br />
        </h2>
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
