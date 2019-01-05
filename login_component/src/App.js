import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './Login'
class App extends Component {
  render() {
    return (
      <Router>  
      <div className="App">
       <Login />
      </div>
    </Router>
    );
  }
}

export default App;
