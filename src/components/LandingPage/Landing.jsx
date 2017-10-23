import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">🏀 This is landing</h1>
        </header>
        <p className="App-intro">
          You have landed
        </p>
      </div>
    );
  }
}

export default LandingPage;