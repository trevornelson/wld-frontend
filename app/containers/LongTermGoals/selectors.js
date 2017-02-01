import { createSelector } from 'reselect';

/**
 * Direct selector to the longTermGoals state domain
 */
const selectLongTermGoalsDomain = () => (state) => state.get('longTermGoals');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LongTermGoals
 */

const makeSelectLongTermGoals = () => createSelector(
  selectLongTermGoalsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectLongTermGoals;
export {
  selectLongTermGoalsDomain,
};
