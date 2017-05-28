import { createSelector } from 'reselect';
import { QUARTERLY_CATEGORIES, DAYS_OF_WEEK } from './constants';
import getDateFromDow from 'utils/getDateFromDow';

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
	(substate) => {
    const priorities = substate.toJS();
    return QUARTERLY_CATEGORIES.map((category) => {
      return {
        category: category,
        priorities: priorities.filter((priority) => {
          return priority.category === category;
        })
      };
    });
  }
);

const makeSelectWeeklyPriorities = () => createSelector(
	selectWeeklyPrioritiesDomain(),
	(substate) => {
    const priorities = substate.toJS();

    return DAYS_OF_WEEK.map((d, i) => {
      return {
        name: d,
        priorities: priorities.filter((p) => {
          const date = new Date(p.due_date);

          return date.getUTCDay() === i;
        })
      };
    });
  }
);

// TODO: Add focused week index here as well
const makeSelectFocusedDate = () => createSelector(
  selectDayOfWeek(),
  (dayOfWeek) => getDateFromDow(dayOfWeek)
);

// TODO: Handle habits here?
const makeSelectDailyPriorities = () => createSelector(
	[ selectWeeklyPrioritiesDomain(), selectDayOfWeek() ],
	(substate, dayOfWeek) => {
    const priorities = substate.toJS();

    const filteredPriorities = priorities.filter((p) => {
      const date = new Date(p.due_date);

      return date.getUTCDay() === dayOfWeek;
    });

    return {
      priorities: filteredPriorities
    };
  }
);

export default makeSelectPriorities;
export {
  selectPrioritiesDomain,
  selectDayOfWeek,
  makeSelectQuarterlyPriorities,
  makeSelectWeeklyPriorities,
  makeSelectDailyPriorities,
  makeSelectFocusedDate
};
