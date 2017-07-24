/*
 *
 * Outliner reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  MOVE_CURSOR_DOWN_ACTION,
} from './constants';

const defaultOutline = { type: 'bullet-list', childItems: [{ type: 'text', text: 'Hello' }, { type: 'text', text: 'World' }, { type: 'bullet-list', childItems: [{ type: 'text', text: 'Hello sublists!' }] }] };

function updateKeys(outline, key) {
  const withUpdatedKey = outline.set('key', key);
  if (!outline.get('childItems')) {
    return withUpdatedKey;
  }
  const updatedChildItems = outline.get('childItems').map((item, i) => updateKeys(item, `${key}.${i}`));
  return withUpdatedKey.set('childItems', updatedChildItems);
}

const initialState = fromJS({ ui: { cursor: '0.0' } }).set('outline', updateKeys(fromJS(defaultOutline), 0));
console.log('initial state', initialState.toJS());
function outlinerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case MOVE_CURSOR_DOWN_ACTION:
      return moveCursorDown(state);
    default:
      return state;
  }
}

export default outlinerReducer;

function moveCursorDown(state) {
  console.log('moving cursor down', state.toJS());
  const outline = state.get('outline');
  const currentCursor = state.get('ui').get('cursor');
  const pathElements = currentCursor.split('.');

  const parentKey = getParentKey(currentCursor);
  const numberOfSiblings = getAtKey(outline, parentKey).get('childItems').size;
  const indexOfLast = numberOfSiblings - 1;
  const currentIndex = parseInt(pathElements[pathElements.length - 1], 10);
  const indexOfBelow = Math.min(currentIndex + 1, indexOfLast);
  const newCursorPosition = pathElements.slice(0, -1).concat([indexOfBelow]).join('.');

  console.log('new cursor position', newCursorPosition);
  return state.setIn(['ui', 'cursor'], newCursorPosition);
}

function getAtKey(outline, key) {
  const path = key.split('.').slice(1); // do not to 'find' the root as we already have it
  return path.reduce((tree, indexAtLevel) => outline.get('childItems').get(indexAtLevel), outline);
}
function getParentKey(key) {
  return key.split('.').slice(-1).join('.');
}
