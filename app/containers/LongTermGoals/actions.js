/*
 *
 * LongTermGoals actions
 *
 */

import {
  ADD_GOAL,
  EDIT_GOAL,
  DELETE_GOAL
} from './constants';

export function addGoal(path, content) {
	return {
		type: ADD_GOAL,
		category: path[0],
		timeframe: path[1],
		content: content
	};
}

export function editGoal(path, id, content) {
  return {
    type: EDIT_GOAL,
    category: path[0],
    timeframe: path[1],
    id: id,
    content: content
  };
}


export function deleteGoal(path, id) {
	return {
		type: DELETE_GOAL,
		category: path[0],
		timeframe: path[1],
		id: id
	};
}
