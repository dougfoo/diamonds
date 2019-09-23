import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DiamondsList from "./diamonds-list.component.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        diamond_color: '',
        diamond_clarity: '',
        diamond_cut: '',
        diamond_carat: '',
        diamond_price: '',
    }
  } 

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Diamond Analytics and Pricing by Foostack.ai</Link>
          </nav>
          <br/>
          <Route path="/" exact component={DiamondsList} />
        </div>
      </Router>
    );
  }
}

export default App;