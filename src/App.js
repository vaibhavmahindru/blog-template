import React from "react";
import Sidebar from "./components/Sidebar.js";
import "./App.css";
import Articles from "./components/articles.js";
import Article from "./components/article.js";
import Footer from "./components/footer.js";
class App extends React.Component {
  state = {
    article: Articles,
  };
  render() {
    const article = this.state.article.map((item) => (
      <Article key={item.id} item={item} />
    ));
    return (
      <React.Fragment>
        <Sidebar />
        {article}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
