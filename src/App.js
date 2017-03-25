import React, { Component } from 'react';

import './App.css';
import Timer from './components/Timer';
import Settings from './components/Settings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer/>
        <Settings />
      </div>
    );
  }
}

export default App;
