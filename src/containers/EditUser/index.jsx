/**
 * Created by wuxiaoran on 2017/8/17.
 */
import React, { Component } from 'react';
import { List, InputItem, NavBar, DatePicker,
  Picker } from 'antd-mobile';
import { createForm } from 'rc-form';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { PropTypes } from 'prop-types';
import head from '../../assets/img/default_head@3x.png';
import style from './index.scss';

const Item = List.Item;
const now = new Date().toISOString().substring(0, 10);
/*eslint-disable*/
const maxDate = moment(now +' +0800',
  'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('1900-01-01 +0800',
  'YYYY-MM-DD Z').utcOffset(8);
/*eslint-disable*/

class EditUser extends Component {
  static propTypes = {
    history: PropTypes.object,
    form: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      birthday: null,
      sex: null,
    };
  }
  onChangeFile = (files) => {
    console.log(files);
    this.setState({
      files,
    });
  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    const { history } = this.props;
    const { files, sex, birthday } = this.state;
    return (
      <div className={style.user__edit}>
        <NavBar
          mode="light"
          onLeftClick={() => history.push('/main/me')}
          rightContent={(<div>
            保存
          </div>)}
        >
          个人信息
        </NavBar>
        <div className={style.content}>
          <form>
            <List>
              <Item>
                <div className={style.upload__head}>
                  <input
                    type="file"
                    accept="image/jpg,image/jpeg,image/png"
                    onChange={e => this.onChangeFile(e.target.files)}
                  />
                  <img
                    src={files.length > 0 ? files[0] : head}
                    alt="头像"
                  />
                  <h3>编辑头像</h3>
                </div>
              </Item>
              <InputItem
                {...getFieldProps('name', {
                  // initialValue: 'little ant',
                  rules: [
                    { required: true, message: '请输入真实姓名!' },
                  ],
                })}
                clear
                error={!!getFieldError('name')}
                onErrorClick={() => {
                  alert(getFieldError('name').join('、'));
                }}
                placeholder="请输入真实姓名"
              >
                姓名
              </InputItem>
              <Picker
                data={[
                  { value: 0, label: '女' },
                  { value: 1, label: '男' },
                ]}
                cols={1}
                value={sex}
                onChange={val => this.setState({ sex: val })}
              >
                <Item
                  arrow="horizontal"
                >
                  性别
                </Item>
              </Picker>
              <InputItem
                value="1231123123"
              >
                手机号码
              </InputItem>
              <DatePicker
                mode="date"
                title="选择日期"
                extra="可选,小于结束日期"
                {...getFieldProps('birthday')}
                value={birthday}
                minDate={minDate}
                maxDate={maxDate}
                onChange={d => this.setState({ birthday: d })}
              >
                <Item arrow="horizontal">出生日期</Item>
              </DatePicker>
            </List>
          </form>
        </div>
      </div>
    );
  }
}

export default createForm()(EditUser);
