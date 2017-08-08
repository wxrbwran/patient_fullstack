/**
 * Created by wuxiaoran on 2017/8/1.
 */
import {
  LOGIN_REQUEST,
} from '../constants/login';

export function login(params) {
  return {
    type: LOGIN_REQUEST,
    payload: params,
    // meta: params,
  };
}
