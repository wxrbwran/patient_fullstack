/**
 * Created by wuxiaoran on 2017/8/8.
 */
import createHistory from 'history/createHashHistory';

// ------------------------------------
// Constants
// ------------------------------------
export const LOCATION_CHANGE = 'LOCATION_CHANGE';

// ------------------------------------
// Actions
// ------------------------------------
export function locationChange(location = '/') {
  return {
    type: LOCATION_CHANGE,
    payload: location,
  };
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }) =>
  nextLocation => dispatch(locationChange(nextLocation));

// ------------------------------------
// Reducer
// ------------------------------------
export const history = createHistory();

// Get the current location.
const initialState = history.location;
export default function locationReducer(state = initialState, action) {
  return action.type === LOCATION_CHANGE
    ? action.payload
    : state;
}
