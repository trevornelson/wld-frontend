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
  INCR_DOW,
  DECR_DOW,
  ADD_DAILY,
  EDIT_DAILY,
  COMPLETE_DAILY,
  DELETE_DAILY,
  COMPLETE_HABIT,
  UNCOMPLETE_HABIT
} from './constants';

export function selectView(view) {
  return {
    type: SELECT_VIEW,
    view: view
  };
}

export function addQuarterly(category, content) {
	return {
		type: ADD_QUARTERLY,
		category: category,
		content: content
	};
}

export function editQuarterly(category, id, content) {
	return {
		type: EDIT_QUARTERLY,
		category: category,
		id: id,
		content: content
	};
}

export function deleteQuarterly(category, id) {
	return {
		type: DELETE_QUARTERLY,
		category: category,
		id: id
	};
}

export function incrDayOfWeek() {
	return {
		type: INCR_DOW
	};
}

export function decrDayOfWeek() {
	return {
		type: DECR_DOW
	};
}

export function addDaily(due_date, content) {
  return {
    type: ADD_DAILY,
    due_date: due_date,
    content: content
  };
}

export function editDaily(id, content) {
	return {
		type: EDIT_DAILY,
		id: id,
		content: content
	};
}

export function completeDaily(id, completed) {
	return {
		type: COMPLETE_DAILY,
		id: id,
    completed: completed
	};
}

export function deleteDaily(id) {
	return {
		type: DELETE_DAILY,
		id: id
	};
}

export function completeHabit(id, completed, due_date) {
  return {
    type: COMPLETE_HABIT,
    id: id,
    due_date: due_date,
    completed: completed
  };
}

export function uncompleteHabit(id) {
  return {
    type: UNCOMPLETE_HABIT,
    id: id
  };
}
