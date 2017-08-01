/*
 *
 * CommandInput reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CLEAR_COMMAND_STRING_ACTION,
  ADD_TO_COMMAND_STRING_ACTION,
} from './constants';

const initialState = fromJS({ currentCommandString: '' });

function commandInputReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CLEAR_COMMAND_STRING_ACTION:
      return state.set('currentCommandString', '');
    case ADD_TO_COMMAND_STRING_ACTION:
      return state.update('currentCommandString', current => current + action.addition);
    default:
      return state;
  }
}

export default commandInputReducer;
