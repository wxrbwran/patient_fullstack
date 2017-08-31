/**
 * Created by wuxiaoran on 2017/8/31.
 */
import React, { Component } from 'react';
import { Button } from 'antd-mobile';
// import { PropTypes } from 'prop-types';
import style from './index.scss';

class PlanItem extends Component {
  // static propTypes = {
  //   someProps: PropTypes.any,
  // };
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
  }
  render() {
    const { isEdit } = this.state;
    return (
      <li>
        <div className={style.title}>
          <div>
            <span>
              下一次
            </span>
            <span>
                今天&nbsp;13:00
              </span>
          </div>
          <Button
            inline
            size="small"
          >
            { isEdit ? '编辑' : '取消' }
          </Button>
        </div>
        <ul className={style.medicine__list}>
          <li>
            <span>
              阿司匹林
            </span>
            <span>
                10mg&nbsp;x&nbsp;2
              </span>
          </li>
        </ul>
      </li>
    );
  }
}

export default PlanItem;
