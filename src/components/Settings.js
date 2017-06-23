import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import styled from 'styled-components';

import * as actions from '../actions';

import Calendar from './Calendar';

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

const CommonDays = styled.div`
  button {
    border: none;
    background: none;
    color: ${RED};
    font-family: 'Quicksand', sans-serif;
    font-size: 17px;
    margin: 0 24px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      color: gray;
    }
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
      <SettingsModal className={this.props.modalVisible ? '' : 'hidden'}>
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

          <CommonDays>
            <button onClick={() => { this.setState({ time: Moment() }) }}>Today</button>
            <button onClick={() => { this.setState({ time: Moment().add(1, 'day') }) }}>Tommorow</button>
          </CommonDays>

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
