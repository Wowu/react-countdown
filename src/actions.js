export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

export const updateSettings = ({endTime, countdownName}) => ({
  type: UPDATE_SETTINGS,
  endTime,
  countdownName,
});
