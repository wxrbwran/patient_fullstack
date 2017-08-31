import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
import PlanItem from './PlanItem';
import style from './index.scss';

class RecentPlan extends Component {
  static propTypes = {
    // someProps: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className={style.plan}>
        <PlanItem />
      </ul>
    );
  }
}

export default RecentPlan;
