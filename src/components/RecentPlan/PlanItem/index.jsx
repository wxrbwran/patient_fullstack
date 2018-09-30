/**
 * Created by wuxiaoran on 2017/8/31.
 */
import React, { Component } from 'react';
import { Button, List, Checkbox } from 'antd-mobile';
import { PropTypes } from 'prop-types';
import style from './index.scss';

const CheckboxItem = Checkbox.CheckboxItem;
const data = [
  { value: 0, label: 'Ph.D.' },
  { value: 1, label: 'Bachelor' },
  { value: 2, label: 'college diploma' },
];

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
      values: [],
    };
  }
  onChange = (val) => {
    const { values } = this.state;
    let checks = [];
    if (values.includes(val)) {
      console.log(val);
      const set = new Set(values);
      set.delete(val);
      checks = [...set];
      this.setState({
        values: checks,
      });
    } else {
      this.setState({
        values: [...values, val],
      });
    }
  }
  toggleEdit = () => {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  }
  render() {
    const { showEdit } = this.props;
    const { isEdit, values } = this.state;
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
          <div>
            <List>
              {data.map(i => (
                <CheckboxItem
                  key={i.value}
                  checked={this.state.values.includes(i.value)}
                  onChange={() => this.onChange(i.value)}
                >
                  {i.label}
                </CheckboxItem>
              ))}
            </List>
            { values.length > 0 ? (
              <div className={style.action}>
                <span>已吃</span>
              </div>
            ) : (
              <div className={style.action}>
                <span>全部已吃</span>
                <span>全部未吃</span>
              </div>
            ) }
          </div>

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
