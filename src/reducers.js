import { UPDATE_COUNTDOWN, TOGGLE_MODAL } from './actions';

const initialCountdownState = {
  endTime: new Date(),
  name: '',
  modalVisible: false,
}

export const countdown = (state = initialCountdownState, action) => {
  switch (action.type) {
    case UPDATE_COUNTDOWN:
      return {
        ...state,
        endTime: action.endTime,
        name: action.countdownName,
      }
    case TOGGLE_MODAL:
      return {
        ...state,
        modalVisible: !state.modalVisible,
      }
    default:
      return state
  }
}

