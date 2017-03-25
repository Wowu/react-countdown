import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';

import InputMoment from 'input-moment';
import * as actions from '../actions';

import 'input-moment/dist/input-moment.css';
import 'font-awesome/css/font-awesome.css';
import './Settings.css';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: Moment(props.time),
      name: props.name,
    };

    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSettingsSave = this.handleSettingsSave.bind(this);
  }

  handleTimeChange(time) {
    this.setState({ time });
  }

  handleTimeSave() {
    console.log('saved!');
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSettingsSave() {
    this.props.updateCountdown({
      endTime: this.state.time.toDate(),
      countdownName: this.state.name,
    });

    this.props.toggleModal();
  }

  render() {
    return(
      <div className={`Settings ${this.props.modalVisible ? '' : 'hidden'}`}>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
          placeholder="Countdown name..."
        />

        <InputMoment
          moment={this.state.time}
          onChange={this.handleTimeChange}
          onSave={this.handleTimeSave}
          prevMonthIcon="fa fa-angle-left"
          nextMonthIcon="fa fa-angle-right"
        />

        <button onClick={this.handleSettingsSave}>Save</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.countdownName,
  time: state.endTime,
  modalVisible: state.modalVisible,
});

export default connect(mapStateToProps, actions)(Settings);
