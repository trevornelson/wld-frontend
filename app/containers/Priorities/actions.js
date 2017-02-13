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

export function incrDayOfWeek() {
	return {
		type: INCR_DOW
	};
};

export function decrDayOfWeek() {
	return {
		type: DECR_DOW
	};
}

export function addDaily(dayIndex, priority) {
	return {
		type: ADD_DAILY,
		dayIndex: dayIndex,
		priority: priority
	};
}

export function editDaily(dayIndex, index, priority) {
	return {
		type: EDIT_DAILY,
		dayIndex: dayIndex,
		index: index,
		priority: priority
	};
}

export function completeDaily(dayIndex, index) {
	return {
		type: COMPLETE_DAILY,
		dayIndex: dayIndex,
		index: index
	};
}

export function deleteDaily(dayIndex, index) {
	return {
		type: DELETE_DAILY,
		dayIndex: dayIndex,
		index: index
	};
}
