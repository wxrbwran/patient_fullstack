/**
 * Created by wuxiaoran on 2017/8/15.
 */
import { api } from '../utils/api';

export default function initApi() {
  return api.post('/init');
}
