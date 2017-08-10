/**
 * Created by wuxiaoran on 2017/8/1.
 */
import { put, call, takeLatest } from 'redux-saga/effects';
import loginApi from '../../apis/login';
import { setAuthorizationToken } from '../../utils/api';

function* login(action) {
  try {
    const res = yield call(loginApi, action.payload);
    setAuthorizationToken(res.data.token);
    yield put({ type: 'LOGIN_SUCCESS', payload: res });
  } catch (err) {
    yield put({ type: 'LOGIN_FAIL', payload: err });
  }
}

export default function* watchLogin() {
  yield takeLatest('LOGIN_REQUEST', login);
}

