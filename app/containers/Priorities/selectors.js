import { createSelector } from 'reselect';
import { get, map, find, isUndefined } from 'lodash';
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
const selectDailyHabitsDomain = () => (state) => state.getIn(['priorities', 'habits']);
const selectDayOfWeek = () => (state) => state.getIn(['priorities', 'dayOfWeek']);

const selectActiveHabits = () => (state) => state.getIn(['habits', 'active_habits']);

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
	[ selectWeeklyPrioritiesDomain(), selectActiveHabits() ],
	(prioritiesState, activeHabitsState) => {
    const priorities = prioritiesState.toJS();
    const activeHabits = activeHabitsState.toJS();

    return DAYS_OF_WEEK.map((d, i) => {
      return {
        name: d,
        priorities: priorities.filter((p) => {
          const date = new Date(p.due_date);

          return date.getUTCDay() === i;
        }),
        habits: activeHabits
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
	[ selectWeeklyPrioritiesDomain(), selectDayOfWeek(), selectActiveHabits(), selectDailyHabitsDomain() ],
	(substate, dayOfWeek, activeHabitsState, dailyHabitsState) => {
    const priorities = substate.toJS();
    const activeHabits = activeHabitsState.toJS();
    const dailyHabits = dailyHabitsState.toJS();

    const filteredPriorities = priorities.filter((p) => {
      const date = new Date(p.due_date);

      return date.getUTCDay() === dayOfWeek;
    });

    const habitsForDow = dailyHabits.filter((d) => {
      const date = new Date(d.due_date);

      return date.getUTCDay() === dayOfWeek;
    });

    const filteredHabits = map(activeHabits, (h) => {
      const matchedDailyHabit = find(habitsForDow, (d) => {
        return d.habit_id === h.id;
      });

      return {
        ...h,
        id: get(matchedDailyHabit, 'id'),
        habit_id: h.id,
        completed: !isUndefined(matchedDailyHabit)
      };
    });

    return {
      priorities: filteredPriorities,
      habits: filteredHabits
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
