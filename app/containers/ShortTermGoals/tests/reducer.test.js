
import { fromJS } from 'immutable';
import shortTermGoalsReducer from '../reducer';

describe('shortTermGoalsReducer', () => {
  it('returns the initial state', () => {
    expect(shortTermGoalsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
