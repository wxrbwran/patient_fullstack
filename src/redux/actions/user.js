/**
 * Created by wuxiaoran on 2017/8/16.
 */
import { FETCH_USER } from '../constants/user';

export function fetchUser() {
  return {
    type: FETCH_USER,
  };
}
