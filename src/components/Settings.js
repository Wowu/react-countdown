import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Moment from 'moment';

import InputMoment from 'input-moment';
import * as Actions from '../actions';

import 'input-moment/dist/input-moment.css';
import 'font-awesome/css/font-awesome.css';
import './Settings.css';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: Moment(),
      name: '',
    };

    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSettingsSave = this.handleSettingsSave.bind(this);
  }

  componentDidMount() {
    this.setState({
      time: Moment(this.props.time),
      name: this.props.name,
    })
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
    this.props.actions.updateSettings({
      endTime: this.state.time.toDate(),
      countdownName: this.state.name,
    });
  }

  render() {
    return(
      <div className="Settings">
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
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
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
