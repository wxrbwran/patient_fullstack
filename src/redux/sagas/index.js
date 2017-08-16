/**
 * Created by wuxiaoran on 2017/8/2.
 */
import { all } from 'redux-saga/effects';
import loginSaga from './login';
import userSaga from './user';
import initSaga from '../../containers/Main/sagas';

export default function* rootSagas() {
  yield all([
    loginSaga(),
    userSaga(),
    initSaga(),
  ]);
}
