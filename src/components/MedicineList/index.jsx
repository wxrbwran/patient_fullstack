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
        <div className={style.head}>
          <div className={style.name}>药名</div>
          <div className={style.dosage}>剂量</div>
          <div className={style.time}>时间</div>
        </div>
        <ul>
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
            </ul>
          </li>
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
          </li>
        </ul>
      </div>
    );
  }
}

export default MedicineList;
