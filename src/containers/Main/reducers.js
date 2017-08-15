/**
 * Created by wuxiaoran on 2017/8/15.
 */

import { INIT, INIT_FAIL, INIT_SUCCESS } from './constants';

const initialState = {
  isSuccess: false,
  isFail: false,
  message: null,
  user: {},
  doctor: {},
  plans: [],
  recordOperations: [],
  advice: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INIT:
      return Object.assign({}, state);
    case INIT_SUCCESS: {
        return Object.assign({}, state, action.payload);
    }
    case INIT_FAIL: {
      return Object.assign({}, state, action.payload);
    }
  }
}
