
import { fromJS } from 'immutable';
import commandInputReducer from '../reducer';

describe('commandInputReducer', () => {
  it('returns the initial state', () => {
    expect(commandInputReducer(undefined, {})).toEqual(fromJS({ currentCommandString: '' }));
  });
});
