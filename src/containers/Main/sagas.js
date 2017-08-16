/**
 * Created by wuxiaoran on 2017/8/15.
 */
import { put, call, takeLatest } from 'redux-saga/effects';
import initApi from '../../apis/init';
import { INIT_SUCCESS,
  INIT_FAIL, INIT } from './constants';

export function* init() {
  try {
    const res = yield call(initApi);
    yield put({ type: INIT_SUCCESS, payload: res });
  } catch (err) {
    yield put({ type: INIT_FAIL, payload: err });
  }
}

export default function* watchInit() {
  yield takeLatest(INIT, init);
}
