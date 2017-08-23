/**
 * Created by wuxiaoran on 2017/8/10.
 */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
// import { Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as logActions from '../../redux/actions/auth';
// import { api } from '../../utils/api';
import style from './index.scss';
import head from '../../assets/img/default_head@3x.png';
import doctor from './img/me_icon_doctor@3x.png';
import documents from './img/me_icon_documents@3x.png';
import medicine from './img/me_icon_medicine@3x.png';
// import pillbox from './img/me_icon_pillbox@3x.png';
import relatives from './img/me_icon_relatives@3x.png';
import setting from './img/me_icon_set@3x.png';

class Me extends Component {
  static propTypes = {
    logActions: PropTypes.object,
    name: PropTypes.string,
    BMI: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { name, BMI } = this.props;
    return (
      <div className={style.me}>
        <div className={style.banner}>
          <Link to="/user/edit">
            <img src={head} alt="头像" />
          </Link>
          <Link to="/user/edit">
            <p className={style.name}>
              {name}<span>&gt;</span>
            </p>
          </Link>
          <p className={style.bmi}>
            BMI: <span>{ BMI }</span>
          </p>
        </div>
        <div className={style.action}>
          <div className={style.action_items}>
            <div className={style.action_item}>
              <img src={documents} alt="诊断" />
              <h3>我的诊断</h3>
            </div>
            <div className={style.action_item}>
              <img src={documents} alt="检验检查" />
              <h3>检验检查</h3>
            </div>
          </div>
          <div className={style.action_items}>
            <div className={style.action_item}>
              <img src={medicine} alt="用药" />
              <h3>我的用药</h3>
            </div>
            <div className={style.action_item}>
              <img src={doctor} alt="我的医生" />
              <h3>我的医生</h3>
            </div>
          </div>
          <div className={style.action_items}>
            <div className={style.action_item}>
              <img src={relatives} alt="亲友" />
              <h3>我的亲友</h3>
            </div>
            <div
              className={style.action_item}
              onClick={() => {
                this.props.logActions.logout();
              }}
            >
              <img src={setting} alt="设置" />
              <h3>设置</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    name: state.user.name,
    BMI: state.user.BMI,
  }),
  dispatch => ({
    logActions: bindActionCreators(logActions, dispatch),
  }),
)(Me);

/*
* <Button
 type="ghost"
 inline
 size="small"
 onClick={this.props.logActions.logout}
 style={{
 marginRight: '0 auto',
 color: '#fff',
 }}
 >
 退出登录
 </Button>
* */
