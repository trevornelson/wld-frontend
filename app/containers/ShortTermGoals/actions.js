/*
 *
 * ShortTermGoals actions
 *
 */

import {
  ADD_GOAL,
  ASSIGN_GOAL,
  EDIT_GOAL,
  DELETE_GOAL,
  CLOSE_MODAL
} from './constants';

export function addGoal(category, goal) {
  return {
    type: ADD_GOAL,
    category: category,
    goal: goal
  };
}

export function assignGoal(category, goal, longTermGoal) {
  return {
    type: ASSIGN_GOAL,
    category: category,
    goal: goal,
    longTermGoal: longTermGoal
  };
}

export function editGoal(category, index, goal) {
  return {
    type: EDIT_GOAL,
    category: category,
    index: index,
    goal: goal
  };
}

export function deleteGoal(category, index) {
  return {
    type: DELETE_GOAL,
    category: category,
    index: index
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}
