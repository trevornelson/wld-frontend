/*
 *
 * Relationships reducer
 *
 */

import { fromJS, toJS, List, Map } from 'immutable';
import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  ADD_RELATIONSHIP,
  DELETE_RELATIONSHIP,
  EDIT_RELATIONSHIP,
} from './constants';

const initialState = fromJS({
	categories: []
});

function relationshipsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      const newCategory = fromJS({name: action.name, relationships: []});
      return state
        .update('categories', categories => categories.push(newCategory));
    case DELETE_CATEGORY:
      return state
        .deleteIn(['categories', action.categoryIndex]);
    case EDIT_CATEGORY:
    	return state
    		.updateIn(['categories', action.categoryIndex, 'name'], (name) => name = action.name);
    case ADD_RELATIONSHIP:
    	return state
    		.updateIn(['categories', action.categoryIndex, 'relationships'], (relationships) => relationships.push(fromJS({
          text: action.name
        })));
    case DELETE_RELATIONSHIP:
      return state
        .deleteIn(['categories', action.categoryIndex, 'relationships', action.relationshipIndex]);
    case EDIT_RELATIONSHIP:
    	return state
    		.setIn(['categories', action.categoryIndex, 'relationships', action.relationshipIndex, 'text'], action.name);
    default:
      return state;
  }
}

export default relationshipsReducer;
