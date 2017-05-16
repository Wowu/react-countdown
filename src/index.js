import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import persistState from 'redux-localstorage';

import { countdown } from './reducers';
import App from './App';

import 'reset-css';
import './index.css';

const enhancer = compose(
  persistState(['endTime'], {
    serialize: (collection) => {
      return JSON.stringify(collection, (key, value) => {
        if (!isNaN(Date.parse(value))) {
          return `date:${value.toString()}`;
        } else {
          return value;
        }
      });
    },
    deserialize: (collection) => {
      return JSON.parse(collection, (key, value) => {
        if (typeof value === 'string' && value.includes('date:')) {
          return new Date(value.slice(5, value.length));
        } else {
          return value;
        }
      });
    }
  }),
);

const store = createStore(countdown, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
