/**
 * Created by wuxiaoran on 2017/8/10.
 */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Me extends Component {
  static propTypes = {
    someProps: PropTypes.any,
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>memememememe</div>
    );
  }
}

export default Me;
