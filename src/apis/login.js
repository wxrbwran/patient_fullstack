/**
 * Created by wuxiaoran on 2017/8/2.
 */

import { authApi } from '../utils/api';

export default function loginApi(params) {
  return authApi.post('/login', {
    tel: params.tel,
    password: params.password,
    grant_type: 'password',
  });
}
