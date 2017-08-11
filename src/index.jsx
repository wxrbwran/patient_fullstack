import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './redux/store';
import { loadSession } from './redux/sagas/login';

import registerServiceWorker from './registerServiceWorker';
import './index.scss';

loadSession(store.dispatch);

/*eslint-disable*/
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
