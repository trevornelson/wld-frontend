/*
 *
 * LongTermGoals reducer
 *
 */

import { fromJS } from 'immutable';
import {
  EDIT_GOAL,
  ADD_GOAL,
  DELETE_GOAL
} from './constants';

const initialState = fromJS({
	goals: {
		Personal: {
      '3': [],
      '5': [],
      '10': []
    },
		Family: {
      '3': [],
      '5': [],
      '10': []
    },
		Business: {
      '3': [],
      '5': [],
      '10': []
    },
		Community: {
      '3': [],
      '5': [],
      '10': []
    }
	}
});

function longTermGoalsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GOAL:
    	return state
    		.updateIn(['goals', action.category, action.year], (goals) => goals.push(fromJS({
          text: action.goal
        })));
    case DELETE_GOAL:
    	return state
    		.deleteIn(['goals', action.category, action.year, action.index]);
    case EDIT_GOAL:
      return state
      	.setIn(['goals', action.category, action.year, action.index, 'text'], action.goal);
    default:
      return state;
  }
}

export default longTermGoalsReducer;
