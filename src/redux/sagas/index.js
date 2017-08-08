/**
 * Created by wuxiaoran on 2017/8/2.
 */
import { all } from 'redux-saga/effects';
import loginSaga from './login';

export default function* rootSagas() {
  yield all([
    loginSaga(),
  ]);
}
