import React, { Component } from 'react';
import { connect } from 'react-redux';
import WebFont from 'webfontloader';

import Timer from './components/Timer';
import Settings from './components/Settings';
import * as actions from './actions';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleSettingsModal = this.toggleSettingsModal.bind(this);
  }

  componentWillMount() {
    WebFont.load({
      google: {
        families: ['Quicksand:500,700'],
      }
    });
  }

  toggleSettingsModal() {
    this.props.toggleModal();
  }

  render() {
    return (
      <div className="App">
        <Timer endTime={this.props.endTime} />
        <button onClick={this.toggleSettingsModal}>Edit</button>
        <Settings/>
      </div>
    );
  }
}

const mapStatetoProps = state => ({ endTime: state.endTime });
export default connect(mapStatetoProps, actions)(App);
