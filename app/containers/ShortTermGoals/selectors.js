import { createSelector } from 'reselect';

/**
 * Direct selector to the shortTermGoals state domain
 */
const selectShortTermGoalsDomain = () => (state) => state.get('shortTermGoals');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ShortTermGoals
 */

const makeSelectShortTermGoals = () => createSelector(
  selectShortTermGoalsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectShortTermGoals;
export {
  selectShortTermGoalsDomain,
};
