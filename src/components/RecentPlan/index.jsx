import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import style from './index.scss';

class RecentPlan extends Component {
  static propTypes = {
    someProps: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.plan}>
        <div className={style.title}>
          <span>
            下一次
          </span>
          <span>
            今天&nbsp;13:00
          </span>
        </div>
        <ul className={style.list}>
          <li>
            <span>
              阿司匹林
            </span>
            <span>
              10mg&nbsp;x&nbsp;2
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default RecentPlan;
