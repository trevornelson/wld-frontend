/*
 *
 * ShortTermGoals reducer
 *
 */

import { fromJS } from 'immutable';
import {
	ADD_GOAL_SUCCESS,
	ASSIGN_GOAL_SUCCESS,
  EDIT_GOAL_SUCCESS,
  DELETE_GOAL_SUCCESS,
  CLOSE_MODAL
} from './constants';
import {
  FETCH_DASHBOARD_SUCCESS
} from 'containers/Dashboard/constants';
import { findIndexById } from 'utils/reducer-helpers';

const initialState = fromJS({
	isModalOpen: false,
	pendingGoal: null,
	pendingCategory: null,
	goals: []
});

function shortTermGoalsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DASHBOARD_SUCCESS:
      return state
        .set('goals', fromJS(action.payload.short_term_goals));
    case ADD_GOAL_SUCCESS:
      return state
        .update('goals', (goals) => goals.push(fromJS({
          id: action.id,
          content: action.content,
          category: action.category
        })));
    case EDIT_GOAL_SUCCESS:
      return state
        .setIn(['goals', findIndexById(state, ['goals'], action.id), 'content'], action.content);
    case DELETE_GOAL_SUCCESS:
      return state
        .deleteIn(['goals', findIndexById(state, ['goals'], action.id)]);
    default:
      return state;
  }
}

export default shortTermGoalsReducer;
