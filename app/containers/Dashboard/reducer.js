/*
 *
 * Dashboard reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_DASHBOARD,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_FAILURE
} from './constants';

const initialState = fromJS({
  fetchedData: false,
  error: null
});

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DASHBOARD_SUCCESS:
      return state
        .set('fetchedData', true);
    case FETCH_DASHBOARD_FAILURE:
      return state
        .set('error', action.error);
    default:
      return state;
  }
}

export default dashboardReducer;
