/**
 * Created by wuxiaoran on 2017/8/16.
 */
import { FETCH_USER, EDIT_USER, EDITING } from '../constants/user';

export function fetchUser() {
  return {
    type: FETCH_USER,
  };
}

export function editUser(params) {
  return {
    type: EDIT_USER,
    payload: params,
  };
}

export function editing() {
  return {
    type: EDITING,
  };
}

