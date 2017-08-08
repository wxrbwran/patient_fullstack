/**
 * Created by wuxiaoran on 2017/8/2.
 */

import { api } from '../utils/api';

export default function loginApi(params) {
  return api.post('/login', {
    phone: params.phone,
    password: params.password,
  });
}
