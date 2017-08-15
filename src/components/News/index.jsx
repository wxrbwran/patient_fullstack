/**
 * Created by wuxiaoran on 2017/8/10.
 */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { WhiteSpace, WingBlank,
  Button, Modal } from 'antd-mobile';

class News extends Component {
  static propTypes = {
    someProps: PropTypes.any,
  };
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
    };
  }
  toggleModal = () => {
    this.setState({
      isShowModal: !this.state.isShowModal,
    });
  }
  render() {
    return (
      <div>
        <WhiteSpace />
        <WingBlank>
          <Button
            onClick={this.toggleModal}
          >Modal 对话框 (自动检测平台)</Button>
        </WingBlank>
        <WhiteSpace />
        <Modal
          title="这是 title"
          transparent
          maskClosable
          visible={this.state.isShowModal}
          onClose={this.toggleModal}
          footer={[{
            text: '确定',
            onPress: () => { this.toggleModal(); },
          }]}
        >
          这是内容...<br />
          这是内容...<br />
        </Modal>
      </div>
    );
  }
}

export default News;
