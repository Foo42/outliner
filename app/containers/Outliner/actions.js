/*
 *
 * Outliner actions
 *
 */

import {
  DEFAULT_ACTION,
  MOVE_CURSOR_DOWN_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function moveCursorDown() {
  return {
    type: MOVE_CURSOR_DOWN_ACTION,
  };
}
