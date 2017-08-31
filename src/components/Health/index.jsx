/**
 * Created by wuxiaoran on 2017/8/10.
 */
import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
import style from './index.scss';

class Health extends Component {
  static propTypes = {
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className={style.health}>
        1
      </div>
    );
  }
}

export default Health;
