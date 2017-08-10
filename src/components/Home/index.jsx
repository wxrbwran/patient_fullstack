/**
 * Created by wuxiaoran on 2017/8/10.
 */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Icon } from 'antd-mobile';
import style from './index.scss';
import head from './img/head@3x.png';
import plan from './img/plan.png';
import ask from './img/ask@3x.png';
import check from './img/check@3x.png';
import advice from './img/advice.png';


class Home extends Component {
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
      <div className={style.home}>
        <div className={style.info}>
          <div className={style.detail}>
            <h1>
              早上好,1231231231
            </h1>
            <p>
              服药达标率
              <span>50.1%</span>
              <Icon type="right" />
            </p>
            <div />
          </div>
          <img src={head} alt="头像" />
        </div>
        <div className={style.actions}>
          <ol>
            <li className={style.action}>
              <img src={plan} alt="" />
              <p>目前用药</p>
            </li>
            <li className={style.action}>
              <img src={ask} alt="" />
              <p>问医生</p>
            </li>
            <li className={style.action}>
              <img src={check} alt="" />
              <p>上传单据</p>
            </li>
          </ol>
        </div>
        <div className={style.doctor}>
          <div className={style.dtitle}>
            <img src={advice} alt="医生建议" />
            <h3>医生建议</h3>
            <Icon type="right" />
          </div>
          <div className={style.dinfo}>
            <img src={head} alt="医生头像" />
            <h2>李大夫</h2>
            <h3>主任医师</h3>
          </div>
          <div className={style.dadvice}>
            33
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
