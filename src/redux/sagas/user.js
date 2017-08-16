/**
 * Created by wuxiaoran on 2017/8/16.
 */
import { put, call, takeLatest } from 'redux-saga/effects';
import fetchUserApi from '../../apis/user';
import { FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL } from '../constants/user';

function* userRequest() {
  try {
    const res = yield call(fetchUserApi);
    yield put({ type: FETCH_USER_SUCCESS, payload: res });
  } catch (err) {
    yield put({ type: FETCH_USER_FAIL, payload: err });
  }
}

export default function* watchUserRequest() {
  yield takeLatest(FETCH_USER, userRequest);
}
