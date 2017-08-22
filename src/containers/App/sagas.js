/**
 * Created by wuxiaoran on 2017/8/15.
 */
import { put, takeLatest } from 'redux-saga/effects';
import { INIT } from './constants';
import { FETCH_USER } from '../../redux/constants/user';

export function* init() {
  yield put({ type: FETCH_USER});
}

export default function* watchInit() {
  yield takeLatest(INIT, init);
}
