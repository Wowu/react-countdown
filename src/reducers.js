import { UPDATE_COUNTDOWN } from './actions';

export const countdown = (state = { endTime: new Date(), name: ''}, action) => {
  switch (action.type) {
    case UPDATE_COUNTDOWN:
      return {
        ...state,
        endTime: action.endTime,
        name: action.countdownName,
      }
    default:
      return state
  }
}
