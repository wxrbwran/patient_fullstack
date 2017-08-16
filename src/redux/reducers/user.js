/**
 * Created by wuxiaoran on 2017/8/16.
 */
import { FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL } from '../constants/user';

const initialState = {
  name: null,
  area: null,
  address: null,
  avatar: null,
  birthday: null,
  sex: null,
  status: null,
  tel: null,
  type: null,
  height: null,
  weight: null,
  waistline: null,
  bindingDoctor: [],
  marriage: null,
  education: null,
  isSuccess: false,
  isFail: false,
  message: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return Object.assign({}, state);
    case FETCH_USER_SUCCESS:
      return Object.assign({}, state, {
        isSuccess: true,
        ...action.payload,
      });
    case FETCH_USER_FAIL:
      return Object.assign({}, state, {
        isFail: true,
        message: action.payload,
      });
    default:
      return state;
  }
}
