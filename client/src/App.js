
import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Home from "./components/Home/index";
import About from "./components/pages/About";
import Project from "./components/Project/index";
import Contact from "./components/Contact/index";
import Experience from "./components/Experience/index";



class App extends Component {
  state = {
      data: null
    };
  
    componentDidMount() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
      // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };
    render () {
  return (
    <div>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/experience" component={Experience} />
      </div>
    </Router>
    </div>
    
  );
    }
}

export default App;
