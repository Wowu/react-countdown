import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import styled from 'styled-components';

import InputMoment from 'input-moment';
import * as actions from '../actions';

import 'input-moment/dist/input-moment.css';
import 'font-awesome/css/font-awesome.css';

const RED = '#FF5636';

const SettingsModal = styled.div`
  width: 670px;
  height: 420px;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;

  background: white;

  border-radius: 25px;

  transition: all 0.2s ease;

  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  visibility: visible;

  &.hidden {
    transform: translate(-50%, -50%) scale(0.9);
    opacity: 0;
    visibility: hidden;
  }
`;

const InfoBox = styled.div`
  font-family: 'Quicksand', Helvetica Neue, sans-serif;
  background: ${RED};
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 25px 0 0 25px;

  h1 {
    font-size: 3.7rem;
    color: white;
    margin-bottom: 16px;
  }

  p {
    display: block;
    font-size: 1.6rem;
    line-height: 3.8rem;
    color: white;
  }
`;

const CalendarBox = styled.div`
  width: 370px;
  height: 100%;
  background: white;
  padding-top: 30px;

  border-radius: 0 25px 25px 0;
`;

const Calendar = styled(InputMoment)`
  background: white;

  /* InputMoment Override */

  && {
    border: none;
    font-family: 'Quicksand', sans-serif;
  }

  && .btn-save {
    display: none;
  }

  && .tab {
    box-sizing: border-box;
    height: 280px;
  }

  && .options {
    margin-bottom: 15px;

    button {
      border: none;
      background: #D44822;
      color: #E4E4E4
      color: white;
    }

    button.is-active {
      background-color: ${RED};
      color: white;
    }
  }

  && .m-calendar .toolbar button {
    background: ${RED};
    border: none;
  }

  && .m-calendar .toolbar .current-date {
    font-size: 1.4rem;
    color: ${RED};
  }

  && .m-calendar thead td,
  && .m-calendar .current-day {
    color: ${RED};
  }

  && .m-calendar td {
    font-size: 13px;
    border: none;
  }

  && .m-calendar tbody td:hover {
    background: ${RED};
  }

  && .m-time {
    padding-top: 20px;
  }

  && .m-time .time,
  && .u-slider-time .value {
    background: ${RED};
  }

  && .m-time .separater,
  && .m-time .time-text {
    color: ${RED};
  }

  && .m-time .time-text {
    margin-top: 20px;
  }

  && .u-slider-time .handle:after {
    border-color: ${RED};
  }

  && .u-slider-time .handle:after {
    top: -12px;
  }
`;

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: Moment(props.time),
    };

    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSettingsSave = this.handleSettingsSave.bind(this);
  }

  handleTimeChange(time) {
    this.setState({ time });
  }

  handleTimeSave() {
    console.log('saved!');
  }

  handleSettingsSave() {
    this.props.updateCountdown({
      endTime: this.state.time.toDate(),
    });

    this.props.toggleModal();
  }

  render() {
    return(
      <SettingsModal className={this.props.modalVisible ? '' : ''}> {/* 'hidden' */}
        <InfoBox>
          <h1>Countdown</h1>
          <p>Simple app written in React</p>
        </InfoBox>

        <CalendarBox>
          <Calendar
            moment={this.state.time}
            onChange={this.handleTimeChange}
            onSave={this.handleTimeSave}
            prevMonthIcon="fa fa-angle-left"
            nextMonthIcon="fa fa-angle-right"
          />

          <button onClick={this.handleSettingsSave}>Save</button>
        </CalendarBox>
      </SettingsModal>
    );
  }
}

const mapStateToProps = state => ({
  time: state.endTime,
  modalVisible: state.modalVisible,
});

export default connect(mapStateToProps, actions)(Settings);
