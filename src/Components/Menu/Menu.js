import React, { Component } from 'react';
import Apps from './Apps.js';
import Online from './Online.js';
import './Menu.css';


class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <nav className="Menu-nav">SAIC Playground</nav>

        <Apps />

        <Online />


      </div>
    )
  }
}

export default Menu;
