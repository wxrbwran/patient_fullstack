/**
 * Created by wuxiaoran on 2017/8/2.
 */
import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import { Link } from 'react-router-dom';
import style from './index.scss';

class Agreement extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className={style.agreement}>
        <h1 className={style.title}>
          <Link
            className={style.link}
            to="/register"
          >
            <Icon
              type="left"
            />
          </Link>
          <p>用户服务条款</p>
        </h1>
        <div>
          <p>asdjasddsa</p>
          <p>alskdsajdsakjdkjsakjdsadhsajkdh</p>
        </div>
      </div>
    );
  }
}

export default Agreement;
