import React, { Component } from 'react';
import Menu from './Components/Menu/Menu';
import Canvas from './Components/Canvas/Canvas';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Canvas />
      </div>
    );
  }
}

export default App;
