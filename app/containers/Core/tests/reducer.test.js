
import { fromJS } from 'immutable';
import coreReducer from '../reducer';

describe('coreReducer', () => {
  it('returns the initial state', () => {
    expect(coreReducer(undefined, {})).toEqual(fromJS({}));
  });
});
