/**
 * Created by wuxiaoran on 2017/9/30.
 */
import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
import MedicineItem from './MedicineItem';
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
        <div className={style.head}>
          <div className={style.name}>药名</div>
          <div className={style.dosage}>剂量</div>
          <div className={style.time}>时间</div>
        </div>
        <ul>
          <MedicineItem />
        </ul>
      </div>
    );
  }
}

export default MedicineList;
