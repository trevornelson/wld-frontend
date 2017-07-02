/*
 *
 * Affirmations reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_AFFIRMATION_SUCCESS,
  EDIT_AFFIRMATION_SUCCESS,
  DELETE_AFFIRMATION_SUCCESS
} from './constants';
import {
  FETCH_DASHBOARD_SUCCESS
} from 'containers/Dashboard/constants';
import { findIndexById } from 'utils/reducer-helpers';

const initialState = fromJS({
  uploading: false,
  error: null,
  visualizations: [],
  affirmations: []
});

function affirmationsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DASHBOARD_SUCCESS:
      return state
        .merge({
          visualizations: fromJS(action.payload.visualizations),
          affirmations: fromJS(action.payload.affirmations)
        });
    case ADD_AFFIRMATION_SUCCESS:
      return state
        .update('affirmations', (affirmations) => affirmations.push(fromJS({
          id: action.id,
          content: action.content
        })));
    case EDIT_AFFIRMATION_SUCCESS:
      return state
        .setIn(['affirmations', findIndexById(state, ['affirmations'], action.id), 'content'], action.content);
    case DELETE_AFFIRMATION_SUCCESS:
      return state
        .deleteIn(['affirmations', findIndexById(state, ['affirmations'], action.id)]);
    default:
      return state;
  }
}

export default affirmationsReducer;
