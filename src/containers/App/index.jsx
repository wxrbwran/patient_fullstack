import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../redux/actions/user';
import Main from '../Main';

import './index.scss';

class App extends Component {
  static propTypes = {
    userActions: PropTypes.object,
    isAuthenticated: PropTypes.bool,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      this.props.userActions.fetchUser();
    }
  }
  render() {
    return (
      <Route path="/main" component={Main} />
    );
  }

}


export default connect(
  state => ({
    isAuthenticated: state.auth.isAuthenticated,
  }),
  dispatch => ({
    userActions: bindActionCreators(userActions, dispatch),
  }),
)(App);
