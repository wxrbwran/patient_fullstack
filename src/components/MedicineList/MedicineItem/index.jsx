/**
 * Created by wuxiaoran on 2017/10/16.
 */
import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
import { Icon, Modal } from 'antd-mobile';
import style from '../index.scss';

class MedicineItem extends Component {
  static propTypes = {
    // someProps: PropTypes.any,
  };
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
  }
  editPlan = () => {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  }
  render() {
    return (
      <li className={style.content}>
        <div className={style.name}>阿司匹林</div>
        <ul>
          <li className={style.inner_content}>
            <div className={style.dosage}>
              200mg x 3
            </div>
            <div className={style.time}>
              <span>
                16:00
              </span>
              <span>
               17:00
              </span>
            </div>
          </li>
          <li className={style.inner_content}>
            <div className={style.dosage}>
              200mg x 3
            </div>
            <div className={style.time}>
              <span>
                16:00
              </span>
              <span>
               17:00
              </span>
              <span>
               18:00
              </span>
              <span>
               18:00
              </span>
            </div>
          </li>
        </ul>
        <Icon
          type="right"
          onClick={this.editPlan}
        />
        <Modal
          title=""
          transparent
          closable
          maskClosable={false}
          visible={this.state.isEdit}
          onClose={this.editPlan}
          footer={[
            { text: '删除', onPress: () => console.log('cancel'), style: 'default' },
            { text: '编辑', onPress: () => console.log('ok') },
          ]}
        >
          1111
        </Modal>
      </li>
    );
  }
}

export default MedicineItem;
