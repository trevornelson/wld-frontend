/*
 *
 * Priorities actions
 *
 */

import {
  SELECT_VIEW,
  ADD_QUARTERLY,
  EDIT_QUARTERLY,
  DELETE_QUARTERLY,
  ADD_DAILY,
  EDIT_DAILY,
  DELETE_DAILY
} from './constants';

export function selectView(view) {
  return {
    type: SELECT_VIEW,
    view: view
  };
}

export function addQuarterly(category, priority) {
	return {
		type: ADD_QUARTERLY,
		category: category,
		priority: priority
	};
}

export function editQuarterly(category, index, priority) {
	return {
		type: EDIT_QUARTERLY,
		category: category,
		index: index,
		priority: priority
	};
}

export function deleteQuarterly(category, index) {
	return {
		type: DELETE_QUARTERLY,
		category: category,
		index: index
	};
}
