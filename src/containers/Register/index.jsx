/**
 * Created by wuxiaoran on 2017/8/1.
 */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Icon, WhiteSpace, InputItem, Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { createForm } from 'rc-form';
import changeStateByValue from '../../utils/changeStateByValue';
import style from './index.scss';
import uncheck from './img/login_register_rb_n@3x.png';
import check from './img/login_register_rb_s@3x.png';


class Register extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      phone: null,
      isAgree: true,
    };
  }
  checkAgreement = () => {
    this.setState({
      isAgree: !this.state.isAgree,
    });
  }
  render() {
    const { step, phone, isAgree } = this.state;
    const { getFieldProps } = this.props.form;
    let extra = null;
    switch (step) {
      case 2:
        extra = (<div>
          <p>12313123123验证码已发送</p>
          <p><span>60</span>秒后可重新发送</p>
        </div>);
        break;
      case 1:
      default:
        extra = null;
        break;
    }
    return (
      <div className="register">
        <Link to="/login">
          <Icon
            type="left"
            size="lg"
            className={style.icon}
          />
        </Link>
        <div className={style.content}>
          <h1 className={style.title}>
            您的常用手机号码
          </h1>
          <div className={style.extra}>
            { extra }
          </div>
          <p className={style.text}>
            电话
          </p>
          <WhiteSpace />
          <InputItem
            {...getFieldProps('phone')}
            type="phone"
            onChange={val =>
              changeStateByValue(this, 'phone', val)}
            value={phone}
          >+86</InputItem>
          <div
            className={style.agree}
            onClick={this.checkAgreement}
          >
            <img
              className={style.check_img}
              src={
                isAgree ? check : uncheck
              }
              alt="选择"
            />
            阅读并同意
            <Link
              to="agreement"
              className={style.link}
            >《用户协议及隐私条款》</Link>
          </div>
        </div>
        <Button
          className={style.btn}
          type="primary"
          disabled={!phone || !isAgree}
          onClick={this.submitLogin}
        >
          发送验证码
        </Button>
      </div>
    );
  }
}

export default createForm()(Register);
