import React from "react";
import Sidebar from "./components/Sidebar.js";
import "./App.css";
import Footer from "./components/footer.js";
import About from "./components/about.js";
import Article from "./components/article";
import Project from "./components/Project";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Article} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Project} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
