/**
 * Created by wuxiaoran on 2017/7/31.
 */
import { combineReducers } from 'redux';
import login from './login';
import ethnicity from './ethnicity';
import user from './user';
import provinces from './provinces';
import locationReducer from '../store/location';

const rootReducer = combineReducers({
  location: locationReducer,
  login,
  user,
  ethnicity,
  provinces,
});

export default rootReducer;
