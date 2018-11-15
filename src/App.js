import React, { Component } from 'react';
import Menu from './Menu';
import Canvas from './Canvas';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Canvas/>
      </div>
    );
  }
}

export default App;
