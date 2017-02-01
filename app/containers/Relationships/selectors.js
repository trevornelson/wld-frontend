import { createSelector } from 'reselect';

/**
 * Direct selector to the relationships state domain
 */
const selectRelationshipsDomain = () => (state) => state.get('relationships');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Relationships
 */

const makeSelectRelationships = () => createSelector(
  selectRelationshipsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectRelationships;
export {
  selectRelationshipsDomain,
};
