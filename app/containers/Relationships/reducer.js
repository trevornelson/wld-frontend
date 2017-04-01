/*
 *
 * Relationships reducer
 *
 */

import { fromJS, toJS, List, Map } from 'immutable';
import { isNull } from 'lodash';
import {
  ADD_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
  EDIT_CATEGORY_SUCCESS,
  ADD_RELATIONSHIP_SUCCESS,
  DELETE_RELATIONSHIP_SUCCESS,
  EDIT_RELATIONSHIP_SUCCESS,
} from './constants';
import {
  FETCH_DASHBOARD_SUCCESS
} from 'containers/Dashboard/constants';
import { findIndexById } from 'utils/reducer-helpers';

const initialState = fromJS({
	categories: []
});

function relationshipsReducer(state = initialState, action) {
  const categoryIndex = action.categoryId ? findIndexById(state, ['categories'], action.categoryId) : null;
  const relationshipIndex = !isNull(categoryIndex) && action.id ? findIndexById(state, ['categories', categoryIndex, 'relationships'], action.id) : null;

  switch (action.type) {
    case FETCH_DASHBOARD_SUCCESS:
      return state
        .set('categories', fromJS(action.payload.relationship_categories));
    case ADD_CATEGORY_SUCCESS:
      return state
        .update('categories', (categories) => categories.push(fromJS({
            id: action.categoryId,
            title: action.title,
            relationships: []
        })));
    case DELETE_CATEGORY_SUCCESS:
      return state
        .deleteIn(['categories', categoryIndex]);
    case EDIT_CATEGORY_SUCCESS:
    	return state
    		.updateIn(['categories', categoryIndex, 'title'], (title) => title = action.title);
    case ADD_RELATIONSHIP_SUCCESS:
    	return state
    		.updateIn(['categories', categoryIndex, 'relationships'], (relationships) => relationships.push(fromJS({
          id: action.relationshipId,
          content: action.content
        })));
    case DELETE_RELATIONSHIP_SUCCESS:
      return state
        .deleteIn(['categories', categoryIndex, 'relationships', relationshipIndex]);
    case EDIT_RELATIONSHIP_SUCCESS:
    	return state
    		.setIn(['categories', categoryIndex, 'relationships', relationshipIndex, 'content'], action.content);
    default:
      return state;
  }
}

export default relationshipsReducer;
