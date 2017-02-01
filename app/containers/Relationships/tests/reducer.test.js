
import { fromJS } from 'immutable';
import relationshipsReducer from '../reducer';

describe('relationshipsReducer', () => {
  it('returns the initial state', () => {
    expect(relationshipsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
