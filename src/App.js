import React, { Component } from 'react';
import logo from './Layout/images/GS_logo_sinLetras.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="fondoProGs">
          <img src={logo} className="animate-flicker" alt="logo" />
          <h1 className="App-title text-white m-5">General Store Admin Application</h1>
        </header>
      </div>
    );
  }
}

export default App;
