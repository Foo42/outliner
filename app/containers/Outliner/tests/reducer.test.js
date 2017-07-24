import outlinerReducer from '../reducer';
import { moveCursorDown } from '../actions';

function getInitialState() {
  return outlinerReducer(undefined, {});
}

describe.only('outlinerReducer', () => {
  describe('cursor movement', () => {
    describe('down', () => {
      it('should move the cursor down to the next item at the same level', () => {
        const after = outlinerReducer(getInitialState(), moveCursorDown()).toJS();
        expect(after.ui.cursor).toEqual('0.1');
      });
    });
  });
});
