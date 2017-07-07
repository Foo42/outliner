
import { fromJS } from 'immutable';
import outlinerReducer from '../reducer';

describe('outlinerReducer', () => {
  it('returns the initial state', () => {
    expect(outlinerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
