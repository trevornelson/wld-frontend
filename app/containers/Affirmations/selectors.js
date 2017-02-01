import { createSelector } from 'reselect';

/**
 * Direct selector to the affirmations state domain
 */
const selectAffirmationsDomain = () => (state) => state.get('affirmations');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Affirmations
 */

const makeSelectAffirmations = () => createSelector(
  selectAffirmationsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAffirmations;
export {
  selectAffirmationsDomain,
};
