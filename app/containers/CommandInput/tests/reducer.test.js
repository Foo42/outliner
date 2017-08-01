
import { fromJS } from 'immutable';
import commandInputReducer from '../reducer';
import { clearCommandString, addToCommandString } from '../actions';

describe('commandInputReducer', () => {
  it('returns the initial state', () => {
    expect(commandInputReducer(undefined, {})).toEqual(fromJS({ currentCommandString: '' }));
  });

  it('clears the currentCommandString when recieving clearCommandString', () => {
    const before = fromJS({ currentCommandString: 'stuff' });
    const after = commandInputReducer(before, clearCommandString()).toJS();
    expect(after.currentCommandString).toEqual('');
  });

  it('appends to the currentCommandString when recieving addToCommandString', () => {
    const before = fromJS({ currentCommandString: 'a' });
    const after = commandInputReducer(before, addToCommandString('b')).toJS();
    expect(after.currentCommandString).toEqual('ab');
  });
});
