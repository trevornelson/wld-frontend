import { createSelector } from 'reselect';
import { CATEGORIES } from './constants';

/**
 * Direct selector to the shortTermGoals state domain
 */
const selectShortTermGoalsDomain = () => (state) => state.get('shortTermGoals');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ShortTermGoals
 */

const makeSelectShortTermGoals = () => createSelector(
  selectShortTermGoalsDomain(),
  (substate) => {
    const { goals } = substate.toJS();
    const groupedGoals = CATEGORIES.map((category) => {
      return {
        name: category,
        goals: goals.filter((goal) => goal.category === category)
      };
    });

    return Object.assign({}, substate.toJS(), { categories: groupedGoals });
  }
);

export default makeSelectShortTermGoals;
export {
  selectShortTermGoalsDomain,
};
