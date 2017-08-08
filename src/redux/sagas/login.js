/**
 * Created by wuxiaoran on 2017/8/1.
 */
import { put, call, takeLatest } from 'redux-saga/effects';
import loginApi from '../../apis/login';


function* login(action) {
  try {
    const { res } = yield call(loginApi, action.payload);
    yield put({ type: 'LOGIN_SUCCESS', payload: res });
  } catch (err) {
    yield put({ type: 'LOGIN_FAIL', payload: err });
    // return Promise.reject(err);
  }
}

export default function* watchLogin() {
  // while (true) {
  //
  // }
  yield takeLatest('LOGIN_REQUEST', login);
}

