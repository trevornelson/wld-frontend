import { createSelector } from 'reselect';

/**
 * Direct selector to the habits state domain
 */
const selectHabitsDomain = () => (state) => state.get('habits');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Habits
 */

const makeSelectHabits = () => createSelector(
  selectHabitsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHabits;
export {
  selectHabitsDomain,
};
