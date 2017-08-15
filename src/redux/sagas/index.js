/**
 * Created by wuxiaoran on 2017/8/2.
 */
import { all } from 'redux-saga/effects';
import loginSaga from './login';
import initSaga from '../../containers/Main/sagas';

export default function* rootSagas() {
  yield all([
    loginSaga(),
    initSaga(),
  ]);
}
