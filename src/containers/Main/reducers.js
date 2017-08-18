/**
 * Created by wuxiaoran on 2017/8/15.
 */

import { INIT, INIT_FAIL, INIT_SUCCESS,
  EDIT_USER, EDIT_USER_SUCCESS, EDIT_USER_FAIL,
  } from './constants';

const initialState = {
  isSuccess: false,
  isFail: false,
  message: null,
  user: {},
  doctor: {},
  plans: [],
  recordOperations: [],
  advice: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INIT:
      return Object.assign({}, state);
    case INIT_SUCCESS: {
        return Object.assign({}, state, {
          isSuccess: true,
          isFail: false,
          ...action.payload,
        });
    }
    case INIT_FAIL: {
      return Object.assign({}, state, {
        isSuccess: false,
        isFail: true,
        message: action.payload,
      });
    }
    case EDIT_USER:
      return Object.assign({}, state);
    case EDIT_USER_SUCCESS:
      return Object.assign({}, state, {

      });
    default:
      return state;
  }
}
