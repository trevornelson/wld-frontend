
import { fromJS } from 'immutable';
import longTermGoalsReducer from '../reducer';

describe('longTermGoalsReducer', () => {
  it('returns the initial state', () => {
    expect(longTermGoalsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
