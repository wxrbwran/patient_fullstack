/**
 * Created by wuxiaoran on 2017/8/10.
 */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { api } from '../../utils/api';

class Me extends Component {
  static propTypes = {
    someProps: PropTypes.any,
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    api.post('validate_code', {
      phone: 12222222222,
    })
    .then(() => {
      console.log('验证码已发送~');
    })
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div>memememememe</div>
    );
  }
}

export default Me;
