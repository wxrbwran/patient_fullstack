/**
 * Created by wuxiaoran on 2017/8/16.
 */
import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAIL,
  EDIT_USER, EDITING, EDIT_USER_SUCCESS, EDIT_USER_FAIL,
  } from '../constants/user';

const initialState = {
  name: null,
  area: null,
  address: null,
  avatar: null,
  birthday: null,
  sex: null,
  status: null,
  tel: null,
  BMI: null,
  type: null,
  height: null,
  weight: null,
  waistline: null,
  bindingDoctor: [],
  marriage: null,
  education: null,
  message: null,
  isLoading: false,
  isSuccess: false,
  isFail: false,
  isEditLoading: false,
  isEditSuccess: false,
  isEditFail: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return Object.assign({}, state, {
        isSuccess: false,
        isFail: false,
        message: null,
      });
    case FETCH_USER_SUCCESS:
      return Object.assign({}, state, {
        isSuccess: true,
        isFail: false,
        ...action.payload,
      });
    case FETCH_USER_FAIL:
      return Object.assign({}, state, {
        isFail: true,
        isSuccess: false,
        message: action.payload,
      });
    case EDIT_USER:
    case EDITING:
      return Object.assign({}, state, {
        isEditSuccess: false,
        isEditFail: false,
        message: null,
      });
    case EDIT_USER_SUCCESS:
      return Object.assign({}, state, {
        isEditSuccess: true,
        isEditFail: false,
        ...action.payload,
      });
    case EDIT_USER_FAIL:
      return Object.assign({}, state, {
        isEditSuccess: false,
        isEditFail: true,
        message: action.payload,
      });
    default:
      return state;
  }
}
