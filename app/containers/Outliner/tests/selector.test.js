import outlinerReducer from '../reducer';
import { overlayCursor } from '../selectors';

function getInitialState() {
  return outlinerReducer(undefined, {});
}

describe.only('Outline Selectors', () => {
  describe('overlay cursor', () => {
    it('should set isSelected to true on item referenced by cursor', () => {
      const state = getInitialState().setIn(['ui', 'cursor'], '0.1');
      const updated = overlayCursor(state);
      const expectedToBeSelected = updated.getIn(['outline', 'childItems', 1]).toJS();
      expect(expectedToBeSelected.key).toEqual('0.1');
      expect(expectedToBeSelected.isSelected).toEqual(true);
    });
  });
});
