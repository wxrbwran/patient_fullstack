/**
 * Created by wuxiaoran on 2017/8/1.
 */

import { LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST } from '../constants/login';

const initialState = {
  isAuthenticated: false,
  isSuccess: false,
  isFail: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, initialState,
        {
          isAuthenticated: true,
          isSuccess: true,
          isFail: false,
        });
    case LOGIN_FAIL:
      return Object.assign({}, initialState,
        {
          isAuthenticated: false,
          isSuccess: false,
          isFail: true,
        });
    case LOGIN_REQUEST:
    default:
      return Object.assign({}, initialState,
        {
          isAuthenticated: false,
          isSuccess: false,
          isFail: false,
        });
  }
}
