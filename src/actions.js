export const UPDATE_COUNTDOWN = 'UPDATE_COUNTDOWN';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const updateCountdown = ({endTime}) => ({
  type: UPDATE_COUNTDOWN,
  endTime,
});

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
})
