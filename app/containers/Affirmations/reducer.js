/*
 *
 * Affirmations reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_AFFIRMATION_SUCCESS,
  EDIT_AFFIRMATION_SUCCESS,
  DELETE_AFFIRMATION_SUCCESS,
  S3_UPLOAD,
  S3_UPLOAD_FAILURE,
  ADD_VISUALIZATION_SUCCESS,
  EDIT_VISUALIZATION_SUCCESS,
  DELETE_VISUALIZATION_SUCCESS
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
    case S3_UPLOAD:
      return state
        .set('uploading', true);
    case S3_UPLOAD_FAILURE:
      return state
        .merge({
          uploading: false,
          error: 'An error occurred. Your image was not uploaded.'
        });
    case ADD_VISUALIZATION_SUCCESS:
      return state
        .set('uploading', false)
        .update('visualizations', (visualizations) => visualizations.push(fromJS({
          id: action.id,
          url: action.url
        })));
    case EDIT_VISUALIZATION_SUCCESS:
      return state
        .setIn(['visualizations', findIndexById(state, ['visualizations'], action.id), 'caption'], action.caption);
    case DELETE_VISUALIZATION_SUCCESS:
      return state
        .deleteIn(['visualizations', findIndexById(state, ['visualizations'], action.id)]);
    default:
      return state;
  }
}

export default affirmationsReducer;
