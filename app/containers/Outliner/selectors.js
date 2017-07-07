import { createSelector } from 'reselect';

/**
 * Direct selector to the outliner state domain
 */
const selectOutlinerDomain = () => (state) => state.get('outliner');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Outliner
 */

const makeSelectOutliner = () => createSelector(
  selectOutlinerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectOutliner;
export {
  selectOutlinerDomain,
};
