import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { NavBar, List,
  InputItem, Popup } from 'antd-mobile';
import { createForm } from 'rc-form';

import style from './index.scss';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let maskProps;
if (isIPhone) {
  maskProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class EditMedicinePlan extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      unit: 'mg',
    };
  }
  leftNavClick = () => {
    console.log('asd');
  };
  clickPopup = () => {
    Popup.show(<div>
      <List
        renderHeader={this.renderHeader}
        className="popup-list"
      >
        {['g', 'mg', 'ml', 'IU', '其他'].map(i => (
          <List.Item
            key={i}
            onClick={() => this.closePopup(i)}
          >{i}</List.Item>
        ))}
      </List>
    </div>,
      { animationType: 'slide-up', maskProps, maskClosable: false });
  };
  closePopup = (unit) => {
    this.setState({ unit });
    Popup.hide();
  };
  render() {
    const { getFieldProps } = this.props.form;
    const { unit } = this.state;
    return (
      <div className={style.edit}>
        <NavBar
          mode="light"
          className={style.nav}
          onLeftClick={this.leftNavClick}
          rightContent={<div>保存</div>}
        >
          编辑服药计划
        </NavBar>
        <div className={style.content}>
          <form>
            <List>
              <InputItem
                {...getFieldProps('medicineName', {
                  rules: [
                    { required: true, message: '通用名' },
                  ],
                })}
                clear
                placeholder="药品名"
              >
                通用名
              </InputItem>
              <InputItem
                {...getFieldProps('dosage')}
                placeholder="剂量"
                extra={(
                  <div
                    onClick={this.clickPopup}
                  >{unit}</div>
                )}
              >
                单位规格
              </InputItem>
            </List>
          </form>
        </div>
      </div>
    );
  }
}

export default createForm()(EditMedicinePlan);
