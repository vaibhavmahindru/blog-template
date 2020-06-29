import React, { Component } from "react";
import Articles from "./articles";

import { Link } from "react-router-dom";
class Article extends Component {
  state = {
    article: Articles,
  };
  render() {
    return (
      <div className="content" id="blog">
        <div>
          {this.state.article.map((item) => {
            return (
              <div className="article" key={item.id}>
                <h1 className="title">{item.title}</h1>
                <h5>{item.date}</h5>
                <p>{item.description}</p>
                <Link to={`/${item.id}`}>Read more...</Link>
                <br />
                <hr className="line" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Article;
