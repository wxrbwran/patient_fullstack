/**
 * Created by wuxiaoran on 2017/8/10.
 */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as logActions from '../../redux/actions/login';
import { api } from '../../utils/api';

class Me extends Component {
  static propTypes = {
    logActions: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    api.get('user/info')
    .then((res) => {
      console.log(res);
    })
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <Button
          type="ghost"
          inline
          size="small"
          onClick={this.props.logActions.logout}
          style={{
            marginRight: '0 auto',
            color: '#fff',
          }}
        >
          退出登录
        </Button>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    logActions: bindActionCreators(logActions, dispatch),
  }),
)(Me);
