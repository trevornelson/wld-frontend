/*
 *
 * Core reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_CORE_PURPOSE,
  CHANGE_CORE_VALUE,
  TOGGLE_CORE_HELP_VIEW
} from './constants';

const initialState = fromJS({
	activeHelpView: '',
  corePurpose: '',
	coreValues: {
		first: '',
		second: '',
		third: ''
	}
});

function coreReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CORE_PURPOSE:
      return state
      	.set('corePurpose', action.corePurpose);
    case CHANGE_CORE_VALUE:
    	return state
    		.setIn(['coreValues', action.valueIndex], action.valueText);
    case TOGGLE_CORE_HELP_VIEW:
      return state
        .set('activeHelpView', action.activeHelpView);
    default:
      return state;
  }
}

export default coreReducer;
