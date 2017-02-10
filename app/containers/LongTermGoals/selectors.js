import { createSelector } from 'reselect';
import { reduce } from 'lodash';

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
  (substate) => substate.toJS()
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
