import React from 'react';
import PropTypes from 'prop-types';
import { moveCursorDown } from '../containers/Outliner/actions';

function buildCommand(commandString) {
  console.log('command string', commandString);
  if (commandString === 'j') {
    return moveCursorDown();
  }
  return false;
}

function commandUpdated(dispatch) {
  return (event) => {
    const target = event.target;
    const command = buildCommand(event.target.value);
    if (command) {
      dispatch(command);
      target.value = '';
    }
  };
}

function CommandInput({ dispatch }) {
  return (<input autoFocus placeholder="commands" onInput={commandUpdated(dispatch)}></input>);
}

CommandInput.propTypes = {
  dispatch: PropTypes.func,
};

export default CommandInput;
