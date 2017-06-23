import React, { Component } from 'react';
import { connect } from 'react-redux';
import WebFont from 'webfontloader';

import Timer from './components/Timer';
import IconButton from './components/Button';
import Settings from './components/Settings';
import * as actions from './actions';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  text-align: center;

  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleSettingsModal = this.toggleSettingsModal.bind(this);
  }

  componentWillMount() {
    WebFont.load({
      google: {
        families: ['Quicksand:400,500,700'],
      }
    });
  }

  toggleSettingsModal() {
    this.props.toggleModal();
  }

  render() {
    return (
      <AppWrapper>
        <Timer endTime={this.props.endTime} />
        <Settings/>
        <IconButton onClick={this.toggleSettingsModal} />
      </AppWrapper>
    );
  }
}

const mapStatetoProps = state => ({ endTime: state.endTime });
export default connect(mapStatetoProps, actions)(App);
