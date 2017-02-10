/*
 *
 * ShortTermGoals reducer
 *
 */

import { fromJS } from 'immutable';
import {
	ADD_GOAL,
	ASSIGN_GOAL,
  EDIT_GOAL,
  DELETE_GOAL,
  CLOSE_MODAL
} from './constants';

const initialState = fromJS({
	isModalOpen: false,
	pendingGoal: null,
	pendingCategory: null,
	goals: {
		Personal: [],
		Family: [],
		Business: [],
		Community: []
	}
});

function shortTermGoalsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GOAL:
      return state
      	.merge({
	    		isModalOpen: true,
					pendingGoal: action.goal,
					pendingCategory: action.category
	    	});
    case ASSIGN_GOAL:
    	return state
    		.updateIn(['goals', action.category], (goals) => goals.push(fromJS({
    			text: action.goal,
    			parentGoal: action.longTermGoal
    		})))
    		.merge({
	  			isModalOpen: false,
	  			pendingGoal: null,
	  			pendingCategory: null
	  		});
    case EDIT_GOAL:
    	return state;
    case DELETE_GOAL:
    	return state;
    case CLOSE_MODAL:
    	return state
    		.merge({
	  			isModalOpen: false,
	  			pendingGoal: null,
	  			pendingCategory: null
	  		});
    default:
      return state;
  }
}

export default shortTermGoalsReducer;
