import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './redux/store';
import { loadSession } from './redux/sagas/login';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

require('./utils/fastclick.js');

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    window.FastClick.attach(document.body);
  }, false);
}

loadSession(store.dispatch);

/*eslint-disable*/
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
