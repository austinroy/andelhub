import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class NotFound extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">🤦🏾‍♂️ Are we lost? 🤦🏾‍♂️</h1>
        </header>
        <p className="App-intro">
          The page you entered does not exist
          <br/> <a href="/">Go home</a>
        </p>
      </div>
    );
  }
}

export default NotFound;
