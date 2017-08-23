/**
 * Created by wuxiaoran on 2017/8/17.
 */
import React, { Component } from 'react';
import { List, InputItem, NavBar, DatePicker,
  Picker, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { PropTypes } from 'prop-types';
import * as actions from '../../redux/actions/user';
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
      area: null,
    };
  }
  componentWillReceiveProps(nextProps) {
    const { isFail, message, history,
      isEditSuccess, isEditFail } = nextProps;
    if (isEditSuccess) {
      Toast.success('编辑成功!', 1, () => {
        history.push('/main/me');
      });
    } else if (isEditFail || isFail) {
      Toast.fail(message);
    }
  }
  onChangeFile = (files) => {
    this.setState({
      files,
    });
  };
  saveUserInfo = () => {
    this.props.form.validateFields((error, value) => {
      if (error) {
        Toast.fail('请输入姓名!');
      } else {
        const {  birthday, area } = this.state;
        const data = Object.assign({}, value, {
          area,
          sex: value.sex[0],
          marriage: value.marriage[0],
          education: value.education[0],
          birthday: !!birthday ? +moment(birthday).format('x') : null,
        });
        console.log(data);
        this.props.actions.editUser(data);
      }
    });
  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    const { history, name, sex,
      marriage, education } = this.props;
    const { files,  birthday, area } = this.state;
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
                  initialValue: name,
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
                {...getFieldProps('sex', {
                  initialValue: [sex],
                })}
                data={[
                  { value: 0, label: '女' },
                  { value: 1, label: '男' },
                ]}
                cols={1}
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
                value={birthday || (!!this.props.birthday ?
                moment(this.props.birthday) : null)}
                minDate={minDate}
                maxDate={maxDate}
                onChange={b => this.setState({ birthday: b })}
              >
                <Item arrow="horizontal">出生日期</Item>
              </DatePicker>
              <Picker
                extra="请选择(可选)"
                data={provinces}
                title="选择地区"
                value={!!area ? area : this.props.area}
                onChange={val => this.setState({ area: val })}
              >
                <Item arrow="horizontal">选择地区</Item>
              </Picker>
              <Picker
                {...getFieldProps('marriage', {
                  initialValue: [marriage],
                })}
                data={[
                  { value: 0, label: '未婚' },
                  { value: 1, label: '已婚' },
                ]}
                cols={1}
              >
                <Item
                  arrow="horizontal"
                >
                  婚姻状况
                </Item>
              </Picker>
              <Picker
                {...getFieldProps('education', {
                  initialValue: [education],
                })}
                data={[
                  { value: 1, label: '初中以下' },
                  { value: 2, label: '高中' },
                  { value: 3, label: '大专' },
                  { value: 4, label: '本科' },
                  { value: 5, label: '研究生及以上' },
                ]}
                cols={1}
              >
                <Item
                  arrow="horizontal"
                >
                  文化程度
                </Item>
              </Picker>
              <InputItem
                {...getFieldProps('height', {
                  initialValue: this.props.height,
                })}
                clear
                type="number"
                extra="cm"
              >
                身高
              </InputItem>
              <InputItem
                {...getFieldProps('weight', {
                  initialValue: this.props.weight,
                })}
                clear
                type="number"
                extra="kg"
              >
                体重
              </InputItem>
              <InputItem
                {...getFieldProps('waistline', {
                  initialValue: this.props.waistline,
                })}
                clear
                type="number"
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

export default connect(
  state => ({
    name: state.user.name,
    area: state.user.area,
    address: state.user.address,
    avatar: state.user.avatar,
    birthday: state.user.birthday,
    sex: state.user.sex,
    status: state.user.status,
    tel: state.user.tel,
    type: state.user.type,
    height: state.user.height,
    weight: state.user.weight,
    waistline: state.user.waistline,
    bindingDoctor: state.user.bindingDoctor,
    marriage: state.user.marriage,
    education: state.user.education,
    message: state.user.message,
    isSuccess: state.user.isSuccess,
    isFail: state.user.isFail,
    isEditSuccess: state.user.isEditSuccess,
    isEditFail: state.user.isEditFail,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(createForm()(EditUser));
