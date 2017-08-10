import React from 'react';
import { HashRouter as Router,
  Route, Redirect } from 'react-router-dom';
import Login from '../Login/index';
import Register from '../Register';
import Agreement from '../Agreement';
import Main from '../Main';
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
        <Route path="/main" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/agreement" component={Agreement} />
      </div>
    </Router>
  );
}

export default App;
