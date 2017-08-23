/**
 * Created by wuxiaoran on 2017/8/16.
 */
import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchUserApi, editUserApi,
  } from '../../apis/user';
import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAIL,
  EDIT_USER, EDITING, EDIT_USER_SUCCESS, EDIT_USER_FAIL,
  } from '../constants/user';


function* userRequest() {
  try {
    const res = yield call(fetchUserApi);
    yield put({ type: FETCH_USER_SUCCESS, payload: res });
  } catch (err) {
    yield put({ type: FETCH_USER_FAIL, payload: err });
  }
}

export function* watchUserRequest() {
  yield takeLatest(FETCH_USER, userRequest);
}

function* userEdit(action) {
  try {
    yield call(editUserApi, action.payload);
    yield put({ type: EDIT_USER_SUCCESS,
      payload: action.payload });
    yield put({ type: EDITING });
  } catch (err) {
    yield put({ type: EDIT_USER_FAIL, payload: err });
    yield put({ type: EDITING });
  }
}

export function* watchUserEdit() {
  yield takeLatest(EDIT_USER, userEdit);
}

