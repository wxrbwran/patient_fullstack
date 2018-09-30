/**
 * Created by wuxiaoran on 2017/8/22.
 */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

export default (Comp) => {
  class Auth extends Component {
    static propTypes = {
      isAuthenticated: PropTypes.bool,
      history: PropTypes.object,
    };
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/login');
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.push('/login');
      }
    }
    render() {
      return <Comp {...this.props} />;
    }
  }
  return connect(
    state => ({
      isAuthenticated: state.auth.isAuthenticated,
    }),
    null,
  )(Auth);
};
