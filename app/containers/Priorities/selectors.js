import { createSelector } from 'reselect';

/**
 * Direct selector to the priorities state domain
 */
const selectPrioritiesDomain = () => (state) => state.get('priorities');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Priorities
 */

const makeSelectPriorities = () => createSelector(
  selectPrioritiesDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPriorities;
export {
  selectPrioritiesDomain,
};
