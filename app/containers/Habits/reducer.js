/*
 *
 * Habits reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_DASHBOARD_SUCCESS
} from 'containers/Dashboard/constants';
import {
  ADD_HABIT_SUCCESS,
  DELETE_HABIT_SUCCESS
} from './constants';
import { findIndexById } from 'utils/reducer-helpers';

const initialState = fromJS({
  active_habits: []
});

function habitsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DASHBOARD_SUCCESS:
      return state
        .merge({
          active_habits: fromJS(action.payload.active_habits)
        });
    case ADD_HABIT_SUCCESS:
      return state
        .update('active_habits', (active_habits) => active_habits.push(fromJS({
          id: action.id,
          content: action.content
        })));
    case DELETE_HABIT_SUCCESS:
      return state
        .deleteIn(['active_habits', findIndexById(state, ['active_habits'], action.id)]);
    default:
      return state;
  }
}

export default habitsReducer;
