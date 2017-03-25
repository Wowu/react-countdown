import React, { Component } from 'react';
import './App.css';

import Timer from './components/Timer'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      endTime: new Date(),
    };
  }

  render() {
    return (
      <div className="App">
        <Timer endTime={this.state.endTime}/>
      </div>
    );
  }
}

export default App;
