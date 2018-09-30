/**
 * Created by wuxiaoran on 2017/8/10.
 */
import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
// import { PropTypes } from 'prop-types';
import style from './index.scss';

class Plan extends Component {
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
        <NavBar
          mode="light"
          className={style.nav}
          leftContent={null}
        >健康状况
        </NavBar>
        <div className={style.content}>
          <div className={style.latest}>
            <h3>最后一次记录值</h3>
            <h1>110/88 <span>mmHg</span></h1>
            <p>收缩压(高压)/舒张压(低压)</p>
          </div>
          <div className={style.record}>
            <h3>最近7天记录值</h3>
            <div className={style.chart}>
              11
            </div>
          </div>
          <div className={style.action}>
            <div>手动记录</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Plan;
