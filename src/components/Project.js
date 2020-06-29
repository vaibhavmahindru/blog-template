import React, { Component } from "react";
import { FaGithubAlt } from "react-icons/fa";
import Projects from "./projects";
class Project extends Component {
  state = {
    project: Projects,
  };
  render() {
    return (
      <div className="project">
        {this.state.project.map((item) => {
          return (
            <div className="project-container">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <a target="_b" href={item.link}>
                <h3 className="code-link">
                  source code &nbsp;&nbsp;
                  <FaGithubAlt id="icon" />
                </h3>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Project;
