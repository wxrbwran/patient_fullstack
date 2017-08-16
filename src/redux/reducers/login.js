/**
 * Created by wuxiaoran on 2017/8/1.
 */

import { LOGIN_SUCCESS,
  LOGIN_FAIL, LOGOUT_REQUEST,
  LOGIN_REQUEST } from '../constants/login';

const initialState = {
  isAuthenticated: false,
  isSuccess: false,
  isFail: false,
  message: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state,
        {
          isAuthenticated: true,
          isSuccess: true,
          isFail: false,
        });
    case LOGIN_FAIL:
      return Object.assign({}, state,
        {
          isAuthenticated: false,
          isSuccess: false,
          isFail: true,
          message: action.payload,
        });
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
      return Object.assign({}, state,
        {
          isAuthenticated: false,
          isSuccess: false,
          isFail: false,
        });
    default:
      return state;
  }
}
