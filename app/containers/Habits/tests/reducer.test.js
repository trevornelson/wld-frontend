
import { fromJS } from 'immutable';
import habitsReducer from '../reducer';

describe('habitsReducer', () => {
  it('returns the initial state', () => {
    expect(habitsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
