/**
 * Created by wuxiaoran on 2017/8/1.
 */
import {
  LOGIN_REQUEST, LOGOUT_REQUEST,
} from '../constants/auth';

export function login(params) {
  return {
    type: LOGIN_REQUEST,
    payload: params,
    // meta: params,
  };
}

export function logout() {
  return {
    type: LOGOUT_REQUEST,
    // meta: params,
  };
}
