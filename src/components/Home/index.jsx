/**
 * Created by wuxiaoran on 2017/8/10.
 */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
// import { Link } from 'react-router-dom';
import { Icon, Modal } from 'antd-mobile';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../redux/actions/user';
import RecentPlan from '../RecentPlan';
import head from '../../assets/img/default_head@3x.png';
import plan from './img/plan.png';
import ask from './img/ask@3x.png';
import check from './img/check@3x.png';
import advice from './img/advice.png';
import style from './index.scss';

class Home extends Component {
  static propTypes = {
    name: PropTypes.string,
  };
  static contextTypes = {
    changeTab: PropTypes.func.isRequired,
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
    const { name } = this.props;
    const { changeTab } = this.context;
    return (
      <div className={style.home}>
        <div className={style.info}>
          <div className={style.detail}>
            <h1>
              早上好,{ name }
            </h1>
            <p>
              服药达标率
              <span>50.1%</span>
              <Icon type="right" />
              <span
                onClick={this.toggleModal}
              >i</span>
            </p>
            <div />
          </div>
          <img src={head} alt="头像" />
        </div>
        <div className={style.actions}>
          <ol>
            <li
              className={style.action}
              onClick={() => changeTab('plan')}
            >
              <img src={plan} alt="" />
              <p>
                目前用药
              </p>
            </li>
            <li className={style.action}>
              <img src={ask} alt="" />
              <p>问医生</p>
            </li>
            <li className={style.action}>
              <img src={check} alt="" />
              <p>上传单据</p>
            </li>
          </ol>
        </div>
        <div className={style.doctor}>
          <div className={style.dtitle}>
            <img src={advice} alt="医生建议" />
            <h3>医生建议</h3>
            <Icon type="right" />
          </div>
          <div className={style.dinfo}>
            <img src={head} alt="医生头像" />
            <h2>李大夫</h2>
            <h3>主任医师</h3>
          </div>
          <div className={style.dadvice}>
            <p>
              asdhskjadhskjadhksahjdaskjdhsakjdhsajkdhasdasd
              asdasdasdadsdasdaddasdsaasdasdsadasdasdasd
              skajhaskdhjaskdaskjdhksadksajdhsadhasdkjhsad
              sjdaskdjkjsahdkjsadhksajhdkjsahdkasjhdkjhsazzzzzzzzzzz
            </p>
          </div>
        </div>
        <div className={style.latest}>
          <RecentPlan />
        </div>
        <Modal
          title="服药计算公式"
          transparent
          closable
          maskClosable={false}
          visible={this.state.isShowModal}
          onClose={this.toggleModal}
        >
          <p>合格次数/总次数</p>
          <p>= 0 /27</p>
          <p>= 0 %</p>
        </Modal>
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
    isSuccess: state.user.isSuccess,
    isFail: state.user.isFail,
    message: state.user.message,
  }),
)(Home);
