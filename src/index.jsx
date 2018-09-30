import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,
  Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './redux/store';
import { loadSession } from './redux/sagas/auth';
import registerServiceWorker from './registerServiceWorker';
import Auth from './containers/Auth';
import Login from './containers/Login/index';
import Register from './containers/Register';
import Agreement from './containers/Agreement';
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
    <Router history={history}>
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <Redirect to="/login" />}
        />
        <Route
          path="/main"
          component={Auth(App)}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/agreement" component={Agreement} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
