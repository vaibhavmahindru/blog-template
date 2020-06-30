import React from "react";
import Sidebar from "./components/Sidebar.js";
import "./App.css";
import Footer from "./components/footer.js";
import About from "./components/about.js";
import Article from "./components/article";
import Project from "./components/Project";
import Blog from "./components/blog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    console.log(
      "This app was made by Vaibhav Mahindru. Check out his github profile https://github.com/vaibhavmahindru"
    );
    return (
      <Router>
        <React.Fragment>
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Article} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Project} />
            <Route path="/:id" component={Blog} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
