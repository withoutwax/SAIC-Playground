import React, { Component } from 'react';
import ChatDisplay from './ChatDisplay';
import ChatBar from './ChatBar.js';

import './Canvas.css';

class Canvas extends Component {
  render() {
    return (
      <div className="Canvas">
        <nav className="Menu-nav">Chat Name</nav>

        <ChatDisplay />
        <ChatBar />

      </div>
    )
  }
}

export default Canvas;
