/**
 * Created by wuxiaoran on 2017/8/16.
 */
import { api } from '../utils/api';

export default function fetchUserApi() {
  return api.get('user');
}
