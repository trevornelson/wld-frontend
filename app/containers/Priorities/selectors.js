import { createSelector } from 'reselect';

/**
 * Direct selector to the priorities state domain
 */
const selectPrioritiesDomain = () => (state) => state.get('priorities');

/**
 * Other specific selectors
 */

const selectQuarterlyPrioritiesDomain = () => (state) => state.getIn(['priorities', 'quarterly']);
const selectWeeklyPrioritiesDomain = () => (state) => state.getIn(['priorities', 'daily']);
const selectDayOfWeek = () => (state) => state.getIn(['priorities', 'dayOfWeek']);

/**
 * Default selector used by Priorities
 */

const makeSelectPriorities = () => createSelector(
  selectPrioritiesDomain(),
  (substate) => substate.toJS()
);

const makeSelectQuarterlyPriorities = () => createSelector(
	selectQuarterlyPrioritiesDomain(),
	(substate) => substate.toJS()
);

const makeSelectWeeklyPriorities = () => createSelector(
	selectWeeklyPrioritiesDomain(),
	(substate) => substate.toJS()
);

const makeSelectDailyPriorities = () => createSelector(
	[ selectWeeklyPrioritiesDomain(), selectDayOfWeek() ],
	(priorities, dayOfWeek) => priorities.get(dayOfWeek).toJS()
);

export default makeSelectPriorities;
export {
  selectPrioritiesDomain,
  selectDayOfWeek,
  makeSelectQuarterlyPriorities,
  makeSelectWeeklyPriorities,
  makeSelectDailyPriorities
};
