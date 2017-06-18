/*
 *
 * Habits actions
 *
 */

import {
  ADD_HABIT,
  DELETE_HABIT
} from './constants';

export function addHabit(content) {
  return {
    type: ADD_HABIT,
    content: content
  };
}

export function deleteHabit(id) {
  return {
    type: DELETE_HABIT,
    id: id
  };
}
