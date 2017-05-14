import React from 'react';
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme';

import Timer from './Timer';

describe('Timer', () => {
  it('shows correct left time', () => {
    // 5 hours, 12 minutes and 8 seconds offset in miliseconds
    const OFFSET = (60 * 60 * 5 + 60 * 12 + 8) * 1000;
    const endTime = new Date(new Date().getTime() + OFFSET);

    const timer = mount(<Timer endTime={endTime}/>);
    expect(timer.html()).toContain('5 : 12 : 08');
  });
});
