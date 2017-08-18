/**
 * Created by wuxiaoran on 2017/8/17.
 */
import React, { Component } from 'react';
import { List, InputItem, NavBar, DatePicker,
  Picker, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { PropTypes } from 'prop-types';
// import qiniu from 'qiniu';
import provinces from './provinces';
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
      area: null,
      marriage: null,
      education: null,
    };
  }
  onChangeFile = (files) => {
    this.setState({
      files,
    });
  }
  saveUserInfo = () => {
    console.log(this.state);
    this.props.form.validateFields((error, value) => {
      if (error) {
        Toast.fail('请输入必要信息!');

      } else {
        const { area, birthday,
          education, marriage, sex } = this.state;
        const data = Object.assign({}, value, {
          area,
          education: !!education ?  education[0] : null,
          marriage: !!marriage ? marriage[0] : null,
          sex: !!sex ? sex[0] : null,
          birthday: !!birthday ? +moment(birthday).format('x') : null,
        });
        console.log(data);
      }
    });
  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    const { history } = this.props;
    const { files, sex, birthday,
      marriage, education, area } = this.state;
    return (
      <div className={style.user__edit}>
        <NavBar
          mode="light"
          onLeftClick={() => history.push('/main/me')}
          rightContent={
            (<div
              onClick={this.saveUserInfo}
            >
            保存
            </div>)
          }
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
                value={birthday}
                minDate={minDate}
                maxDate={maxDate}
                onChange={d => this.setState({ birthday: d })}
              >
                <Item arrow="horizontal">出生日期</Item>
              </DatePicker>
              <Picker
                extra="请选择(可选)"
                data={provinces}
                title="选择地区"
                value={area}
                onChange={val => this.setState({ area: val })}
              >
                <Item arrow="horizontal">选择地区</Item>
              </Picker>
              <Picker
                data={[
                  { value: 0, label: '未婚' },
                  { value: 1, label: '已婚' },
                ]}
                cols={1}
                value={marriage}
                onChange={val => this.setState({ marriage: val })}
              >
                <Item
                  arrow="horizontal"
                >
                  婚姻状况
                </Item>
              </Picker>
              <Picker
                data={[
                  { value: 1, label: '初中以下' },
                  { value: 2, label: '高中' },
                  { value: 3, label: '大专' },
                  { value: 4, label: '本科' },
                  { value: 5, label: '研究生及以上' },
                ]}
                cols={1}
                value={education}
                onChange={val => this.setState({ education: val })}
              >
                <Item
                  arrow="horizontal"
                >
                  文化程度
                </Item>
              </Picker>
              <InputItem
                {...getFieldProps('height')}
                clear
                type="number"
                error={!!getFieldError('height')}
                extra="cm"
              >
                身高
              </InputItem>
              <InputItem
                {...getFieldProps('weight')}
                clear
                type="number"
                error={!!getFieldError('weight')}
                extra="kg"
              >
                体重
              </InputItem>
              <InputItem
                {...getFieldProps('waistline')}
                clear
                type="number"
                error={!!getFieldError('waistline')}
                extra="cm"
              >
                腰围
              </InputItem>
            </List>
          </form>
        </div>
      </div>
    );
  }
}

export default createForm()(EditUser);
