/*
 *
 * LongTermGoals actions
 *
 */

import {
  EDIT_GOAL,
  ADD_GOAL,
  DELETE_GOAL
} from './constants';

export function editGoal(path, index, goal) {
  return {
    type: EDIT_GOAL,
    category: path[0],
    year: path[1],
    index: index,
    goal: goal
  };
}

export function addGoal(path, goal) {
	return {
		type: ADD_GOAL,
		category: path[0],
		year: path[1],
		goal: goal
	};
}

export function deleteGoal(path, index) {
	return {
		type: DELETE_GOAL,
		category: path[0],
		year: path[1],
		index: index
	};
}
