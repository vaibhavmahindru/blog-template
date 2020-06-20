import React, { Component } from "react";

class Article extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="content" id="blog">
          <div class="article">
            <h1>{this.props.item.title}</h1>
            <h5>{this.props.item.date}</h5>
            <p>{this.props.item.description}</p>
            <a href="#">Read More</a>
          </div>
          <br />
          <hr className="line" />
        </div>
      </React.Fragment>
    );
  }
}

export default Article;
