/*
 *
 * LongTermGoals reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_GOAL_SUCCESS,
  EDIT_GOAL_SUCCESS,
  DELETE_GOAL_SUCCESS
} from './constants';
import {
  FETCH_DASHBOARD_SUCCESS
} from 'containers/Dashboard/constants';
import { findIndexById } from 'utils/reducer-helpers';

const initialState = fromJS({
	goals: []
});

function longTermGoalsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DASHBOARD_SUCCESS:
      return state
        .set('goals', fromJS(action.payload.long_term_goals));
    case ADD_GOAL_SUCCESS:
      return state
        .update('goals', (goals) => goals.push(fromJS({
          id: action.id,
          category: action.category,
          timeframe: action.timeframe,
          content: action.content
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

export default longTermGoalsReducer;
