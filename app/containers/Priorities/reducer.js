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
  ADD_DAILY,
  EDIT_DAILY,
  COMPLETE_DAILY,
  DELETE_DAILY,
} from './constants';
import {
  FETCH_DASHBOARD_SUCCESS
} from 'containers/Dashboard/constants';
import { findIndexById } from 'utils/reducer-helpers';

// Temporary, remove once sagas + backend are set up.
const currentDay = new Date();
const getWeek = () => {
  var output = [];
  var today = new Date();
  var d = new Date(today.setDate(today.getDate() - today.getDay()));
  for (var i = 0; i < 7; i++ ) {
    output.push({
      date: new Date(d.getFullYear(), d.getMonth(), d.getDate()),
      priorities: [],
      habits: [false, false, false, false]
    });
    d.setDate(d.getDate() + 1);
  }
  return output;
};

const initialState = fromJS({
	view: 'quarter',
  dayOfWeek: currentDay.getDay(),
	quarterly: [],
	daily: getWeek(),
  habits: []
});

function prioritiesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DASHBOARD_SUCCESS:
      return state
        .merge({
          quarterly: fromJS(action.payload.quarterly_todos),
          daily: fromJS(action.payload.daily_todos),
          habits: fromJS(action.payload.habits)
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
    // case INCR_DOW:
      // // TODO: What to do when incr past Saturday?
      // return state
        // .update('dayOfWeek', (dow) => dow + 1);
    // case DECR_DOW:
      // // TODO: What to do when decr past Sunday?
      // return state
        // .update('dayOfWeek', (dow) => dow - 1);
    // case ADD_DAILY:
      // return state
        // .updateIn(['daily', action.dayIndex, 'priorities'], (priorities) => priorities.push(fromJS({
          // text: action.priority
        // })));
    // case EDIT_DAILY:
      // return state
        // .setIn(['daily', action.dayIndex, 'priorities', action.index, 'text'], action.priority);
    // case COMPLETE_DAILY:
      // return state
        // .setIn(['daily', action.dayIndex, 'priorities', action.index, 'isComplete'], true);
    // case DELETE_DAILY:
      // return state
        // .deleteIn(['daily', action.dayIndex, 'priorities', action.index]);
    default:
      return state;
  }
}

export default prioritiesReducer;
