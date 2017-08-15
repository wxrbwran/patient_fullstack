/**
 * Created by wuxiaoran on 2017/8/1.
 */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Icon, WhiteSpace, Toast,
  InputItem, Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { createForm } from 'rc-form';
// import history from 'history';
import { api } from '../../utils/api';
import changeStateByValue from '../../utils/changeStateByValue';
import style from './index.scss';
import uncheck from './img/login_register_rb_n@3x.png';
import check from './img/login_register_rb_s@3x.png';

let timer = null;
let count = 10;
class Register extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      tel: null,
      passwordType: 'password',
      password: null,
      code: null,
      isSend: false,
      codeText: '获取验证码',
      isAgree: true,
    };
  }
  changePasswordType = () => {
    const { passwordType } = this.state;
    this.setState({
      passwordType: passwordType ===
      'password' ? 'text' : 'password',
    });
  }
  sendCode = () => {
    const { tel } = this.state;
    if (!!tel) {
      this.setState({
        isSend: true,
        codeText: '10s',
      });
      api.post('validate_code', {
        tel,
      })
        .then(() => {
          Toast.success('验证码已发送~');
        })
        .catch(err => Toast.fail(err));
      timer = setInterval(() => {
        if (count === 0) {
          this.setState({
            isSend: false,
            codeText: '获取验证码',
          });
          count = 10;
          clearInterval(timer);
          timer = null;
        } else {
          count -= 1;
          this.setState({
            codeText: `${count}s`,
          });
        }
      }, 1000);
    } else {
      Toast.info('请输入手机号码!');
    }
  }
  checkAgreement = () => {
    this.setState({
      isAgree: !this.state.isAgree,
    });
  }
  submitRegister = () => {
    const { tel, code, password } = this.state;
    api.post('register', {
      tel,
      code,
      password,
    })
    .then((res) => {
      const { status } = res.data;
      const { history } = this.props;
      if (status === 'success') {
        Toast.success('注册成功!');
        history.push('/login');
      } else {
        Toast.fail(res.data.message);
      }
    })
    .catch((err) => {
      Toast.fail(err);
    });
  }
  render() {
    const { tel, passwordType, password,
      code, isSend, codeText, isAgree } = this.state;
    const { getFieldProps } = this.props.form;
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
            新用户注册
          </h1>
          <p className={style.text}>
            电话
          </p>
          <WhiteSpace />
          <InputItem
            {...getFieldProps('tel')}
            type="phone"
            onChange={val =>
              changeStateByValue(this, 'tel', val)}
            value={tel}
          >+86</InputItem>
          <p className={style.text}>
            验证码
          </p>
          <WhiteSpace />
          <InputItem
            {...getFieldProps('code')}
            type="text"
            onChange={val =>
              changeStateByValue(this, 'code', val)}
            value={code}
            maxLength={4}
            extra={
              (<Button
                type="primary"
                size="small"
                disabled={isSend}
                className={style.code}
                onClick={this.sendCode}
              >
                {codeText}
              </Button>)
            }
          />
          <p className={style.text}>
            密码
          </p>
          <WhiteSpace />
          <InputItem
            {...getFieldProps('password')}
            type={passwordType}
            value={password}
            onChange={val =>
              changeStateByValue(this, 'password', val)}
            extra={
              (<div
                className={style.view_password}
                onClick={this.changePasswordType}
              >
                显示密码
              </div>)
            }
          />
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
          disabled={!tel || !isAgree}
          onClick={this.submitRegister}
        >
          注册
        </Button>
      </div>
    );
  }
}

export default createForm()(Register);
