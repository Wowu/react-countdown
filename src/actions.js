export const UPDATE_COUNTDOWN = 'UPDATE_COUNTDOWN';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const updateCountdown = ({endTime, countdownName}) => ({
  type: UPDATE_COUNTDOWN,
  endTime,
  countdownName,
});

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
})
