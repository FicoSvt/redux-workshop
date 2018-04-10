import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

// Modules
import { Routing } from './modules';

// Store
import { configureStore } from './store';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();