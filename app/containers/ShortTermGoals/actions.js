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

export function addGoal(category, content) {
  return {
    type: ADD_GOAL,
    category: category,
    content: content
  };
}

export function assignGoal(category, content, longTermGoal) {
  return {
    type: ASSIGN_GOAL,
    category: category,
    content: content,
    longTermGoal: longTermGoal
  };
}

export function editGoal(category, id, content) {
  return {
    type: EDIT_GOAL,
    category: category,
    id: id,
    content: content
  };
}

export function deleteGoal(category, id) {
  return {
    type: DELETE_GOAL,
    category: category,
    id: id
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}
