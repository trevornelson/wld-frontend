/*
 *
 * Priorities reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SELECT_VIEW,
  ADD_QUARTERLY_SUCCESS,
  EDIT_QUARTERLY_SUCCESS,
  DELETE_QUARTERLY_SUCCESS,
  INCR_DOW,
  DECR_DOW,
  ADD_DAILY_SUCCESS,
  EDIT_DAILY_SUCCESS,
  COMPLETE_DAILY_SUCCESS,
  DELETE_DAILY_SUCCESS,
  COMPLETE_HABIT_SUCCESS,
  UNCOMPLETE_HABIT_SUCCESS
} from './constants';
import {
  FETCH_DASHBOARD_SUCCESS
} from 'containers/Dashboard/constants';
import { findIndexById } from 'utils/reducer-helpers';

// Temporary, remove once sagas + backend are set up.
const currentDay = new Date();

const initialState = fromJS({
	view: 'quarter',
  dayOfWeek: currentDay.getDay(),
	quarterly: [],
	daily: [],
  habits: []
});

function prioritiesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DASHBOARD_SUCCESS:
      return state
        .merge({
          quarterly: fromJS(action.payload.quarterly_todos),
          daily: fromJS(action.payload.recent_todos),
          habits: fromJS(action.payload.habit_todos)
        });
    case SELECT_VIEW:
      return state
      	.set('view', action.view);
    case ADD_QUARTERLY_SUCCESS:
      return state
        .update('quarterly', (priorities) => priorities.push(fromJS({
          id: action.id,
          category: action.category,
          content: action.content,
          isComplete: false
        })));
    case EDIT_QUARTERLY_SUCCESS:
      return state
        .setIn(['quarterly', findIndexById(state, ['quarterly'], action.id), 'content'], action.content);
    case DELETE_QUARTERLY_SUCCESS:
      return state
        .deleteIn(['quarterly', findIndexById(state, ['quarterly'], action.id)]);
    case INCR_DOW:
      // TODO: What to do when incr past Saturday?
      return state
        .update('dayOfWeek', (dow) => dow + 1);
    case DECR_DOW:
      // TODO: What to do when decr past Sunday?
      return state
        .update('dayOfWeek', (dow) => dow - 1);
    case ADD_DAILY_SUCCESS:
      return state
        .update('daily', (priorities) => priorities.push(fromJS({
          id: action.id,
          content: action.content,
          due_date: action.due_date,
          completed: action.completed
        })));
    case EDIT_DAILY_SUCCESS:
      return state
        .setIn(['daily', findIndexById(state, ['daily'], action.id), 'content'], action.content);
    case COMPLETE_DAILY_SUCCESS:
      return state
        .setIn(['daily', findIndexById(state, ['daily'], action.id), 'completed'], action.completed);
    case DELETE_DAILY_SUCCESS:
      return state
        .deleteIn(['daily', findIndexById(state, ['daily'], action.id)]);
    case COMPLETE_HABIT_SUCCESS:
      return state
        .update('habits', (habits) => habits.push(fromJS({
          id: action.id,
          habit_id: action.habit_id,
          due_date: action.due_date,
          completed: action.completed
        })));
    case UNCOMPLETE_HABIT_SUCCESS:
      return state
        .deleteIn(['habits', findIndexById(state, ['habits'], action.id)]);
    default:
      return state;
  }
}

export default prioritiesReducer;
