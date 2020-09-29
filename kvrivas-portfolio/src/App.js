
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Home from "./components/Home/index";
import About from "./components/pages/About";
import Project from "./components/Project/index";
import Contact from "./components/pages/Contact";
import Experience from "./components/Experience/index";

import "./index.css"


function App() {
  return (
    <div>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route path="/experience" component={Experience} />
      </div>
    </Router>
    </div>
    
  );
}

export default App;
