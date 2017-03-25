import { UPDATE_SETTINGS } from './actions';

export const settings = (state, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return {
        ...state,
        endTime: action.endTime,
        countdownName: action.countdownName,
      }
    default:
      return state
  }
}
