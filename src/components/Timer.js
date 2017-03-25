import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: 0,
      timeLeft: '',
    };
  }

  componentDidMount() {
    this.updateTime();
    const countdownInterval = setInterval(this.updateTime.bind(this), 1000);
    this.setState({ intervalId: countdownInterval });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateTime() {
    let allSecondsLeft = Math.round((this.props.endTime - new Date()) / 1000);

    const pastEvent = allSecondsLeft < 0 ? true : false;
    allSecondsLeft = Math.abs(allSecondsLeft);

    const SECONDS_IN_DAY = 60 * 60 * 24;
    const SECONDS_IN_HOUR = 60 * 60;
    const SECONDS_IN_MINUTE = 60;

    const days = Math.floor(allSecondsLeft / SECONDS_IN_DAY);
    allSecondsLeft -= days * SECONDS_IN_DAY;
    const hours = Math.floor(allSecondsLeft / SECONDS_IN_HOUR);
    allSecondsLeft -= hours * SECONDS_IN_HOUR;
    const minutes = Math.floor(allSecondsLeft / SECONDS_IN_MINUTE);
    allSecondsLeft -= minutes * SECONDS_IN_MINUTE;
    const seconds = allSecondsLeft;

    let timeLeft = '';
    timeLeft += days ? `${days} days, ` : '';
    timeLeft += hours ? `${hours} hours, ` : '';
    timeLeft += minutes ? `${minutes} minutes, ` : '';
    timeLeft += `${seconds} seconds `;
    timeLeft += pastEvent ? 'passed' : 'left';
    this.setState({ timeLeft });
  }

  render() {
    return(
      <div className="Timer">
        {this.state.timeLeft}
      </div>
    );
  }
}

Timer.propTypes = {
  endTime: React.PropTypes.instanceOf(Date).isRequired,
};

export default Timer;
