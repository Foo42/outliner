/*
 *
 * Outliner reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';
// import {outlineFromMarkdown} from '../../lib/markdown';

// const outline = outlineFromMarkdown('# Hello');
// console.log(outline);
const initialState = fromJS({outliner:{}});
function outlinerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default outlinerReducer;
