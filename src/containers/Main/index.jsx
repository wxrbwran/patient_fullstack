/**
 * Created by wuxiaoran on 2017/8/10.
 */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Route } from 'react-router-dom';
import Home from '../../components/Home';
import Plan from '../../components/Plan';
import News from '../../components/News';
import Health from '../../components/Health';
import Me from '../../components/Me';
import EditUser from '../../containers/EditUser';

import style from './index.scss';
import home from './img/tab_home_nor@3x.png';
import homeSel from './img/tab_home_sel@3x.png';

import plan from './img/tab_plan_nor@3x.png';
import planSel from './img/tab_plan_sel@3x.png';

import news from './img/tab_news_nor@3x.png';
import newsSel from './img/tab_news_sel@3x.png';

import health from './img/tab_health_nor@3x.png';
import healthSel from './img/tab_health_sel@3x.png';

import me from './img/tab_me_nor@3x.png';
import meSel from './img/tab_me_sel@3x.png';


class Main extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      tab: 'home',
    };
  }
  componentWillMount() {
    const { location, history } = this.props;
    const { tab } = this.state;
    if (!location.pathname.includes(tab)) {
      const arr = location.pathname.split('/main/');
      if (arr.length < 2) {
        // '/main'
        history.push('/main/home');
      } else {
        // '/main/**/*'
        this.changeTab(location.pathname.split('/main/')[1]);
      }
    }
  }
  changeTab = (tab) => {
    const { history, location } = this.props;
    this.setState({
      tab,
    });
    if (location.pathname !== `/main/${tab}`) {
      history.push(`/main/${tab}`);
    }
  }
  render() {
    const { tab } = this.state;
    const { location } = this.props;
    const includePaths = ['/main/home', '/main/plan',
      '/main/news', '/main/health', '/main/me'];
    let isShow = false;
    const length = includePaths.length;
    for (let i = 0; i < length; i += 1) {
      if (location.pathname === includePaths[i]) {
        isShow = true;
        break;
      }
    }
    return (
      <div className={style.main}>
        <div className={style.content}>
          <Route path="/main/home" component={Home} />
          <Route path="/main/plan" component={Plan} />
          <Route path="/main/news" component={News} />
          <Route path="/main/health" component={Health} />
          <Route path="/main/me" component={Me} />
          <Route path="/main/user/edit" component={EditUser} />
        </div>
        {
          isShow && (
            <ul className={style.tab}>
              <li onClick={() => this.changeTab('home')}>
                <img
                  src={tab === 'home' ? homeSel : home}
                  alt="首页"
                />
                <p>首页</p>
              </li>
              <li onClick={() => this.changeTab('plan')}>
                <img
                  src={tab === 'plan' ? planSel : plan}
                  alt="服药"
                />
                <p>服药</p>
              </li>
              <li onClick={() => this.changeTab('news')}>
                <img
                  src={tab === 'news' ? newsSel : news}
                  alt="互动"
                />
                <p>互动</p>
              </li>
              <li onClick={() => this.changeTab('health')}>
                <img
                  src={tab === 'health' ? healthSel : health}
                  alt="健康"
                />
                <p>健康</p>
              </li>
              <li onClick={() => this.changeTab('me')}>
                <img
                  src={tab === 'me' ? meSel : me}
                  alt="我的"
                />
                <p>我的</p>
              </li>
            </ul>
          )
        }
      </div>
    );
  }
}

export default Main;
