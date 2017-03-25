export const UPDATE_COUNTDOWN = 'UPDATE_COUNTDOWN';

export const updateCountdown = ({endTime, countdownName}) => ({
  type: UPDATE_COUNTDOWN,
  endTime,
  countdownName,
});
