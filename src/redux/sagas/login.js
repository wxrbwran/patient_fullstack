/**
 * Created by wuxiaoran on 2017/8/1.
 */
import { put, call, takeLatest } from 'redux-saga/effects';
import history from 'history/createHashHistory';
import loginApi from '../../apis/login';
import { api, authApi, setAuthorizationToken } from '../../utils/api';

let dispatch = null;
const interceptors = {
  request: {
    unprotected: [],
  },
  response: {
    protected: [],
  },
};
function unprotectApi() {
  interceptors.response.protected.map(interceptor =>
    api.interceptors.response.eject(interceptor));
  const interceptor = api.interceptors.request.use(() => {
    Promise.reject(new Error('请求中断'));
  });
  interceptors.request.unprotected.push(interceptor);
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('refresh_token');
  setAuthorizationToken(false);
  unprotectApi();
  // dispatch(removeCurrentUser());
  history().push('/login');
}

function protectApi() {
  // first eject all unprotected interceptors?
  interceptors.request.unprotected.map(interceptor => (
    api.interceptors.request.eject(interceptor)
  ));
  // now apply all protected interceptors
  interceptors.response.protected.push(api.interceptors.response.use(
    (response) => {
      if (!response.data) {
        return Promise.reject('请求失败');
      }
      // the inner 'status' and 'data' is from JSend API schema
      const { status } = response.data;
      if (status === 'fail') {
        const { data } = response.data;
        const msg = data.message || '请求失败';
        return Promise.reject(msg);
      }
      return response.data.data;
    },
    (error) => {
      if (error.message &&
        error.message.indexOf('timeout') !== -1) {
        return Promise.reject('请求超时');
      } else
      if (error.message &&
        error.message.indexOf('Network Error') !== -1) {
        return Promise.reject('网络异常');
      } else if (error.response &&
        error.response.status === 401) {
        const reqConfig = error.config;
        return authApi.post('login', {
          refresh_token: localStorage.refresh_token,
          grant_type: 'refresh_token',
        }).then((res) => {
          if (res.status === 200 && res.data) {
            setAuthorizationToken(res.data.token);
            const localStorage = window.localStorage;
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('refresh_token', res.data.refresh_token);
            dispatch({ type: 'LOGIN_SUCCESS' });
            reqConfig.headers.Authorization =
              `Bearer ${res.data.token}`;
            return api.request(reqConfig);
          }
          return Promise.reject('登录超时');
        }).catch(() => {
          logout();
          return Promise.reject('登录超时');
          // already logged out, not interested in data
        });
      }
      return Promise.reject('服务异常');
    },
  ));
}

function* login(action) {
  try {
    const res = yield call(loginApi, action.payload);
    if (res.data.status === 'success') {
      setAuthorizationToken(res.data.token);
      const localStorage = window.localStorage;
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('refresh_token', res.data.refresh_token);
      yield put({ type: 'LOGIN_SUCCESS' });
      protectApi();
    } else {
      yield put({ type: 'LOGIN_FAIL', payload: res.data.message });
    }
  } catch (err) {
    yield put({ type: 'LOGIN_FAIL', payload: err });
  }
}
export default function* watchLogin() {
  yield takeLatest('LOGIN_REQUEST', login);
}


export function loadSession(dis) {
  dispatch = dis;
  if (localStorage.token) {
    setAuthorizationToken(localStorage.token);
    dispatch({ type: 'LOGIN_SUCCESS' });
    protectApi();
    // protectApi(dispatch);
  }
  // else {
    // if not authenticated, intercept api requests
    // unprotectApi();
  // }
}
