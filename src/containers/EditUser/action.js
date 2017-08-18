/**
 * Created by wuxiaoran on 2017/8/18.
 */
import { EDIT_USER } from './constant';

export function editUser(params) {
  return {
    type: EDIT_USER,
    payload: params,
  };
}
