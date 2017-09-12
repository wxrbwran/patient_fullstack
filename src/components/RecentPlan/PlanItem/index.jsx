/**
 * Created by wuxiaoran on 2017/8/31.
 */
import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { PropTypes } from 'prop-types';
import style from './index.scss';

class PlanItem extends Component {
  static propTypes = {
    showEdit: PropTypes.bool,
  };
  static defaultProps = {
    showEdit: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
  }
  toggleEdit = () => {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  }
  render() {
    const { showEdit } = this.props;
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
          { showEdit && (
            <Button
              inline
              size="small"
              onClick={this.toggleEdit}
            >
              { isEdit ? '取消' : '编辑' }
            </Button>
          ) }
        </div>
        { isEdit ? (
          <ul>
            <li>11</li>
          </ul>
        ) : (
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
        ) }
      </li>
    );
  }
}

export default PlanItem;
