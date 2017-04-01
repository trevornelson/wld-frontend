/*
 *
 * Core reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CORE_PURPOSE_SUCCESS,
  CORE_VALUE_SUCCESS,
  TOGGLE_CORE_HELP_VIEW
} from './constants';
import {
  FETCH_DASHBOARD_SUCCESS
} from 'containers/Dashboard/constants';

const initialState = fromJS({
	activeHelpView: '',
  corePurpose: '',
	coreValues: []
});

function coreReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DASHBOARD_SUCCESS:
      return state
        .merge({
          'coreValues': action.payload.values,
          'corePurpose': action.payload.purpose
        });
    case CORE_PURPOSE_SUCCESS:
      return state
      	.set('corePurpose', action.corePurpose);
    case CORE_VALUE_SUCCESS:
      return state
        .update(
          state.get('coreValues').findIndex(v => v.id === action.valueId),
          value => Object.assign({}, value, { content: action.valueText })
        );
    case TOGGLE_CORE_HELP_VIEW:
      return state
        .set('activeHelpView', action.activeHelpView);
    default:
      return state;
  }
}

export default coreReducer;
