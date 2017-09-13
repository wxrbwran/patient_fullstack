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
    };
  }
  onChange = (val) => {
    console.log(val);
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
          <List>
            {data.map(i => (
              <CheckboxItem
                key={i.value}
                onChange={() => this.onChange(i.value)}
              >
                {i.label}
              </CheckboxItem>
            ))}
          </List>
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
