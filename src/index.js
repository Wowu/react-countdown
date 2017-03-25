import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { settings } from './reducers';
import App from './App';

import './index.css';

const initialState = {
  endTime: new Date(),
  countdownName: '',
}

const store = createStore(settings, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
