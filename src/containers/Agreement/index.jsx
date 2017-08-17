/**
 * Created by wuxiaoran on 2017/8/2.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavBar } from 'antd-mobile';
import style from './index.scss';

class Agreement extends Component {
  static propTypes = {
    history: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { history } = this.props;
    return (
      <div className={style.agreement}>
        <NavBar
          mode="light"
          onLeftClick={() => history.push('/register')}
          rightContent={null}
        >用户服务协议</NavBar>
        <div>
          <p>asdjasddsa</p>
          <p>alskdsajdsakjdkjsakjdsadhsajkdh</p>
        </div>
      </div>
    );
  }
}

export default Agreement;
