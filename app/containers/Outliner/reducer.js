/*
 *
 * Outliner reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const outline = {type:'document', childItems:[{type:'heading', text:'Hello', childItems:[]}]}

const initialState = fromJS({outline});
function outlinerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default outlinerReducer;
