/**
 * Created by wuxiaoran on 2017/8/10.
 */
import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
// import { PropTypes } from 'prop-types';
import style from './index.scss';
import doctor from './img/news_icon_doctor@2x.png';
import assistant from './img/news_icon_nurse@2x.png';


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
      <div className={style.news}>
        <NavBar
          mode="light"
          className={style.nav}
          leftContent={null}
        >消息
        </NavBar>
        <div className={style.content}>
          <div className={style.doctor}>
            <img src={doctor} alt="doctor" />
            <div>
              <h3>
                医生提醒
              </h3>
              <p>
                您最近做过哪些检查？
              </p>
              <span>
                17:27
              </span>
            </div>
          </div>
          <div className={style.assistant}>
            <img src={assistant} alt="assistant" />
            <div>
              <h3>医学助理</h3>
              <p>
                您了解自己的耐药性吗？
              </p>
              <span>
                17:27
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Plan;
