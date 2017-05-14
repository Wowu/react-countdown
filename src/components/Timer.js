import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import leftPad from 'left-pad';

const DaysWrapper = styled.div`
  margin: 0 auto 34px;
  display: ${props => props.daysLeft ? 'inline-block' : 'none'};
  height: auto;
  overflow: hidden;
`;

const Days = styled.div`
  font-family: 'Quicksand', Helvetica Neue, sans-serif;
  font-size: 6.2rem;
  font-weight: 500;
  color: white;

  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);

  &::after {
    content: "";
    display: block;
    background: rgba(81, 81, 81, 0.24);
    width: 100%;
    height: 7px;
    border-radius: 7px;
  }
`;

const Clock = styled.div`
  font-family: 'Quicksand', Helvetica Neue, sans-serif;
  font-size: 8.5rem;
  font-weight: 700;
  color: ${props => props.pastEvent ? '#a7a6af' : 'white'};

  text-shadow: 0 11px 29px rgba(0, 0, 0, 0.2);
`;

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: null,
      timeLeft: '',
      daysLeft: '',
      pastEvent: false,
    };

    this.updateTimeLeft = this.updateTimeLeft.bind(this);
  }

  componentDidMount() {
    this.updateTimeLeft();
    const intervalId = setInterval(this.updateTimeLeft, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateTimeLeft() {
    let allSecondsLeft =
      Math.round((this.props.endTime - new Date()) / 1000);

    const pastEvent = allSecondsLeft < 0 ? true : false;
    this.setState({ pastEvent })

    allSecondsLeft = Math.abs(allSecondsLeft);

    const SECONDS_IN_DAY = 60 * 60 * 24;
    const SECONDS_IN_HOUR = 60 * 60;
    const SECONDS_IN_MINUTE = 60;

    const daysLeft = Math.floor(allSecondsLeft / SECONDS_IN_DAY);
    this.setState({ daysLeft });
    allSecondsLeft -= daysLeft * SECONDS_IN_DAY;

    const hours = Math.floor(allSecondsLeft / SECONDS_IN_HOUR);
    allSecondsLeft -= hours * SECONDS_IN_HOUR;

    let minutes = Math.floor(allSecondsLeft / SECONDS_IN_MINUTE);
    minutes = leftPad(minutes, 2, '0');
    allSecondsLeft -= minutes * SECONDS_IN_MINUTE;

    const seconds = leftPad(allSecondsLeft, 2, '0');

    let timeLeft = `${hours} : ${minutes} : ${seconds}`;
    this.setState({ timeLeft });
  }

  render() {
    return(
      <div className="Timer">
        <DaysWrapper daysLeft={this.state.daysLeft}>
          <Days>
            {this.state.daysLeft}
          </Days>
        </DaysWrapper>

        <Clock pastEvent={this.state.pastEvent}>
          {this.state.timeLeft}
        </Clock>
      </div>
    );
  }
}

Timer.propTypes = {
  endTime: PropTypes.instanceOf(Date).isRequired,
};

export default Timer;
