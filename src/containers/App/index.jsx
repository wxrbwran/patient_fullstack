import React from 'react';
// import { PropTypes } from 'prop-types';
import { HashRouter as Router,
  Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../Login/index';
import Auth from '../Auth';
import Register from '../Register';
import Agreement from '../Agreement';
import Main from '../Main';
import EditUser from '../EditUser';

import './index.scss';

function App() {
  return (
    <Router history={history}>
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <Redirect to="/login" />}
        />
        <Route
          path="/main"
          component={Auth(Main)}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/agreement" component={Agreement} />
        <Route exact path="/user/edit" component={EditUser} />
      </div>
    </Router>
  );
}
// App.propTypes = {
//   isAuthenticated: PropTypes.bool,
// };

export default connect(
  state => ({
    isAuthenticated: state.login.isAuthenticated,
  }),
)(App);
