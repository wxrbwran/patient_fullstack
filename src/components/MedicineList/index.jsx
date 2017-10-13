/**
 * Created by wuxiaoran on 2017/9/30.
 */
import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
import style from './index.scss';

class MedicineList extends Component {
  static propTypes = {
    // someProps: PropTypes.any,
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <ul className={style.head}>
          <li className={style.name}>药名</li>
          <li className={style.dosage}>剂量</li>
          <li className={style.time}>时间</li>
        </ul>
        <ul className={style.content}>
          <li className={style.name}>药名</li>
          <li className={style.dosage}>剂量</li>
          <li className={style.time}>时间</li>
        </ul>
      </div>
    );
  }
}

export default MedicineList;
