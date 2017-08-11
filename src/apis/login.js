/**
 * Created by wuxiaoran on 2017/8/2.
 */

import { authApi } from '../utils/api';

export default function loginApi(params) {
  return authApi.post('/login', {
    phone: params.phone,
    password: params.password,
    grant_type: 'password',
  });
}
