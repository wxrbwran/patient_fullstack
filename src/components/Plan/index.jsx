/**
 * Created by wuxiaoran on 2017/8/10.
 */
import React, { Component } from 'react';
import { NavBar, Tabs } from 'antd-mobile';
import { Link } from 'react-router-dom';
// import { PropTypes } from 'prop-types';
import RecentPlan from '../RecentPlan';
import MedicineList from '../MedicineList';
import style from './index.scss';

const TabPane = Tabs.TabPane;

class Plan extends Component {
  static propTypes = {
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className={style.plan}>
        <NavBar
          mode="light"
          className={style.nav}
          leftContent={
            (<img
              className={style.plan__img}
              src={require('./img/history@3x.png')}
              alt="用药历史"
            />)}
          rightContent={
            (<Link
              to="/main/plan/edit"
            >
              <img
                className={style.plan__img}
                src={require('./img/common_add@3x.png')}
                alt="新增用药"
              />
            </Link>)}
        >
          服药
        </NavBar>
        <div className={style.plan__content}>
          <Tabs defaultActiveKey="1" animated >
            <TabPane tab="服药单" key="1">
              <div
                className={style.plan__plans}
              >
                <MedicineList />
              </div>
            </TabPane>
            <TabPane tab="服药计划" key="2">
              <div
                className={style.plan__lists}
              >
                <RecentPlan />
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Plan;
