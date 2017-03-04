import { createSelector } from 'reselect';

/**
 * Direct selector to the authentication state domain
 */
const selectAuthenticationDomain = () => (state) => state.get('authentication');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Authentication
 */

const makeSelectAuthentication = () => createSelector(
  selectAuthenticationDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAuthentication;
export {
  selectAuthenticationDomain,
};
