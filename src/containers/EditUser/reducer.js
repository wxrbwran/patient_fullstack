/**
 * Created by wuxiaoran on 2017/8/18.
 */

import { EDIT_USER, EDIT_USER_SUCCESS, EDIT_USER_FAIL,
} from './constant';

const initialState = {
  isSuccess: false,
  isFail: false,
  message: null,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case EDIT_USER:
      return Object.assign({}, state);
    case EDIT_USER_SUCCESS:
      return Object.assign({}, state, {
        isSuccess: true,
        isFail: false,
      });
    case EDIT_USER_FAIL:
      return Object.assign({}, state, {
        isSuccess: false,
        isFail: true,
        message: action.payload,
      });
    default:
      return state;
  }
}
