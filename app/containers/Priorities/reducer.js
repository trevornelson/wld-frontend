/*
 *
 * Priorities reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SELECT_VIEW,
  ADD_QUARTERLY,
  EDIT_QUARTERLY,
  DELETE_QUARTERLY,
  ADD_DAILY,
  EDIT_DAILY,
  DELETE_DAILY,
} from './constants';

const initialState = fromJS({
	view: 'day',
	quarterly: {
		Open: [],
		Ongoing: [],
		Done: [],
		Hold: []
	},
	daily: []
});

function prioritiesReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_VIEW:
      return state
      	.set('view', action.view);
    case ADD_QUARTERLY:
    	return state
    		.updateIn(['quarterly', action.category], (priorities) => priorities.push(fromJS({
          text: action.priority
        })));
    case EDIT_QUARTERLY:
    	return state
    		.setIn(['quarterly', action.category, action.index, 'text'], action.priority);
    case DELETE_QUARTERLY:
    	return state
    		.deleteIn(['quarterly', action.category, action.index]);
    case ADD_DAILY:
    	return state;
    case EDIT_DAILY:
    	return state;
    case DELETE_DAILY:
    	return state;
    default:
      return state;
  }
}

export default prioritiesReducer;
