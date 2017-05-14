import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

const DaysWrapper = styled.div`
  margin: 0 auto;
  width: 50px;
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
  color: white;

  text-shadow: 0 11px 29px rgba(0, 0, 0, 0.2);
`;

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: null,
      timeLeft: '',
      daysLeft: '',
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

    // const pastEvent = allSecondsLeft < 0 ? true : false;
    allSecondsLeft = Math.abs(allSecondsLeft);

    const SECONDS_IN_DAY = 60 * 60 * 24;
    const SECONDS_IN_HOUR = 60 * 60;
    const SECONDS_IN_MINUTE = 60;

    const daysLeft = Math.floor(allSecondsLeft / SECONDS_IN_DAY);
    this.setState({ daysLeft });

    allSecondsLeft -= daysLeft * SECONDS_IN_DAY;
    const hours = Math.floor(allSecondsLeft / SECONDS_IN_HOUR);
    allSecondsLeft -= hours * SECONDS_IN_HOUR;
    const minutes = Math.floor(allSecondsLeft / SECONDS_IN_MINUTE);
    allSecondsLeft -= minutes * SECONDS_IN_MINUTE;
    const seconds = allSecondsLeft;

    let timeLeft = `${hours} : ${minutes} : ${seconds}`;
    this.setState({ timeLeft });
  }

  render() {
    return(
      <div className="Timer">
        <DaysWrapper>
          <Days>
            {this.state.daysLeft}
          </Days>
        </DaysWrapper>

        <Clock>
          {this.state.timeLeft}
        </Clock>
      </div>
    );
  }
}

Timer.propTypes = {
  endTime: PropTypes.instanceOf(Date).isRequired,
};

const mapStatetoProps = state => ({ endTime: state.endTime });

export default connect(mapStatetoProps)(Timer);
