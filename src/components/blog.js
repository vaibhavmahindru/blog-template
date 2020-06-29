import React, { Component } from "react";
import Articles from "./articles";
class Blog extends Component {
  state = {
    article: Articles,
  };
  render() {
    return (
      <div className="blog">
        {this.state.article.map((item) => {
          const id = parseInt(this.props.match.params.id);

          if (item.id === id) {
            return (
              <div className="blog-container">
                <h1>{item.title}</h1>
                <h5>{item.date}</h5>
                <p>{item.text}</p>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Blog;
