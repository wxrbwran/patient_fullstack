/**
 * Created by wuxiaoran on 2017/7/28.
 */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Link } from 'react-router-dom';
import { WhiteSpace, InputItem,
  Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/login';
import style from './index.scss';
import logo from './img/login_logo@3x.png';

class Login extends Component {
  static propTypes = {
    isSuccess: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isFail: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      phone: null,
      password: null,
      passwordType: 'password',
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isSuccess && nextProps.isAuthenticated) {
      console.log('登录成功');
    } else if (nextProps.isFail) {
      Toast.info('登录失败,请检查账号名或密码', 2);
    }
  }
  changePasswordType = () => {
    const { passwordType } = this.state;
    this.setState({
      passwordType: passwordType ===
      'password' ? 'text' : 'password',
    });
  }
  changeStateByValue = (name, value) => {
    this.setState({
      [name]: value,
    });
  }
  submitLogin = () => {
    const { phone, password } = this.state;
    if (!!phone && !!password) {
      this.props.actions.login({
        phone,
        password,
      });
      // Toast.loading('正在登录...', null, () => {
      //   Toast.hide();
      // });
    } else {
      Toast.info('请输入账号名或密码!', 2);
    }
  }
  render() {
    const { getFieldProps } = this.props.form;
    const { passwordType, phone, password } = this.state;
    return (
      <div className="login">
        <p className={style.to_reg}>
          <Link
            className={style.to_reg}
            to="/register"
          >新用户注册</Link>
        </p>
        <img src={logo} alt="logo" />
        <p className={style.text}>电话</p>
        <WhiteSpace />
        <InputItem
          {...getFieldProps('phone')}
          type="phone"
          onChange={val => this.changeStateByValue('phone', val)}
          value={phone}
        >+86</InputItem>
        <p className={style.text}>密码</p>
        <WhiteSpace />
        <InputItem
          {...getFieldProps('password')}
          type={passwordType}
          value={password}
          onChange={val =>
            this.changeStateByValue('password', val)}
          extra={
            (<div
              className={style.view_password}
              onClick={this.changePasswordType}
            >
              显示密码
            </div>)
          }
        />
        <p className={style.text}>忘记密码</p>
        <Button
          className={style.btn}
          type="primary"
          disabled={!phone || !password}
          onClick={this.submitLogin}
        >
          登录
        </Button>
      </div>
    );
  }
}

export default connect(
  state => ({
    isSuccess: state.login.isSuccess,
    isFail: state.login.isFail,
    isAuthenticated: state.login.isAuthenticated,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(createForm()(Login));
