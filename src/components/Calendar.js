import styled from 'styled-components';

import InputMoment from 'input-moment';
import 'input-moment/dist/input-moment.css';
import 'font-awesome/css/font-awesome.css';

const RED = '#FF5636';

const Calendar = styled(InputMoment)`
  background: white;

  /* InputMoment Override */

  && {
    border: none;
    font-family: 'Quicksand', sans-serif;
    padding: 0 6px 0 6px;
  }

  && .btn-save {
    display: none;
  }

  && .tab {
    box-sizing: border-box;
    height: 250px;
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
    font-weight: 500;
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

  && .m-calendar .current-day {
    font-weight: bold;

    &:hover {
      background: #E8E8E8;
    }
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

export default Calendar;


