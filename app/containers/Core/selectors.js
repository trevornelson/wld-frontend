import { createSelector } from 'reselect';

/**
 * Direct selector to the core state domain
 */
const selectCoreDomain = () => (state) => state.get('core');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Core
 */

const makeSelectCore = () => createSelector(
  selectCoreDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCore;
export {
  selectCoreDomain,
};
