import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: null,
      timeLeft: '',
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
  endTime: PropTypes.instanceOf(Date).isRequired,
};

const mapStatetoProps = state => ({ endTime: state.endTime });

export default connect(mapStatetoProps)(Timer);
