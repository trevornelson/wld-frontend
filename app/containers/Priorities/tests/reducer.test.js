
import { fromJS } from 'immutable';
import prioritiesReducer from '../reducer';

describe('prioritiesReducer', () => {
  it('returns the initial state', () => {
    expect(prioritiesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
