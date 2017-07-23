import React, { Component } from 'react';
import NotePlayTest from './view/notePlayTest.js'
import './App.css';

class App extends Component {
  handleChange(e) { this.setState({ [e.target.id]: e.target.value }); }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Beep Boop - beats by T Kettle</h2>
          <NotePlayTest />
        </div>
      </div>
    );
  }
}

export default App;
