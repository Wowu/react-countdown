import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Timer from './components/Timer';
import Settings from './components/Settings';
import * as Actions from './actions';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleSettingsModal = this.toggleSettingsModal.bind(this);
  }

  toggleSettingsModal() {
    this.props.actions.toggleModal();
  }

  render() {
    return (
      <div className="App">
        <Timer/>
        <button onClick={this.toggleSettingsModal}>Edit</button>
        <Settings/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(null, mapDispatchToProps)(App);
