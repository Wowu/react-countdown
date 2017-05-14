import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import { countdown } from './reducers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(countdown);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
