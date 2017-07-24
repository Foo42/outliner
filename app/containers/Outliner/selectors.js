import * as _ from 'lodash';
import { createSelector } from 'reselect';

/**
 * Direct selector to the outliner state domain
 */
const selectOutlinerDomain = () => (state) => state.get('outliner');

/**
 * Other specific selectors
 */
export function overlayCursor(outlinerState) {
  console.log('outlinerState', outlinerState.toJS());
  const cursor = outlinerState.get('ui').get('cursor');
  console.log('cursor', cursor);
  const cursorPath = _.flatMap(cursor.split('.').slice(1), (part) => ['childItems', parseInt(part, 10)]);
  const root = outlinerState.get('outline');

  const updatedOutline = root.updateIn(cursorPath, (item) => item.set('isSelected', true));

  return outlinerState.set('outline', updatedOutline);
}

/**
 * Default selector used by Outliner
 */

const makeSelectOutliner = () => createSelector(
  createSelector(
    selectOutlinerDomain(),
    overlayCursor
  ),
  (substate) => substate.toJS(),
);

export default makeSelectOutliner;
export {
  selectOutlinerDomain,
};
