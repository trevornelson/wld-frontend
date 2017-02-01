
import { fromJS } from 'immutable';
import affirmationsReducer from '../reducer';

describe('affirmationsReducer', () => {
  it('returns the initial state', () => {
    expect(affirmationsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
