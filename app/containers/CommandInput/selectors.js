import { createSelector } from 'reselect';

/**
 * Direct selector to the commandInput state domain
 */
const selectCommandInputDomain = () => (state) => state.get('outliner').get('ui').get('commandInput');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CommandInput
 */

const makeSelectCommandInput = () => createSelector(
  selectCommandInputDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCommandInput;
export {
  selectCommandInputDomain,
};
