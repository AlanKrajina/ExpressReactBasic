import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Boxers from './components/Boxers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>
        <Boxers />
      </div>
    );
  }
}

export default App;
