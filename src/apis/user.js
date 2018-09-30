/**
 * Created by wuxiaoran on 2017/8/16.
 */
import { api } from '../utils/api';

export function fetchUserApi() {
  return api.get('user/info');
}

export function editUserApi(params) {
  return api.patch('user', params);
}
