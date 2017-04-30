import { createSelector } from 'reselect';
import { reduce } from 'lodash';
import { TIMEFRAMES, CATEGORIES } from './constants';

/**
 * Direct selector to the longTermGoals state domain
 */
const selectLongTermGoalsDomain = () => (state) => state.get('longTermGoals');

/**
 * Other specific selectors
 */

const selectPendingShortTermGoalCategory = () => (state) => state.getIn(['shortTermGoals', 'pendingCategory']);

/**
 * Default selector used by LongTermGoals
 */

const makeSelectLongTermGoals = () => createSelector(
  selectLongTermGoalsDomain(),
  (substate) => {
    const { goals } = substate.toJS();
    return CATEGORIES.map((category) => {
      return {
        name: category,
        timeframes: TIMEFRAMES.map((timeframe) => {
          return {
            name: timeframe,
            goals: goals.filter((goal) => {
              return goal.timeframe === timeframe && goal.category === category;
            })
          };
        })
      };
    });
  }
);

const makeSelectAssociatedLongTermGoals = () => createSelector(
	[ selectLongTermGoalsDomain(), selectPendingShortTermGoalCategory() ],
	(longTermGoals, category) => {
		if (!longTermGoals || !category) { return []; }
		const goals = longTermGoals.getIn(['goals', category]).toJS();
		return reduce(goals, (result, value, key) => result.concat(value));
	}
);

export default makeSelectLongTermGoals;
export {
  selectLongTermGoalsDomain,
  makeSelectAssociatedLongTermGoals
};
