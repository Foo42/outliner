/*
 *
 * CommandInput actions
 *
 */

import {
  DEFAULT_ACTION,
  ADD_TO_COMMAND_STRING_ACTION,
  CLEAR_COMMAND_STRING_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function addToCommandString(addition) {
  return {
    addition,
    type: ADD_TO_COMMAND_STRING_ACTION,
  };
}

export function clearCommandString() {
  return {
    type: CLEAR_COMMAND_STRING_ACTION,
  };
}
