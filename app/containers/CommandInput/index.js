/*
 *
 * CommandInput
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectCommandInput from './selectors';

import { moveCursorDown } from '../Outliner/actions';

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

export class CommandInput extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const dispatch = this.props.dispatch;
    console.log('disable', dispatch);
    return (
      <input autoFocus placeholder="commands" onInput={commandUpdated(dispatch)}></input>
    );
  }
}

CommandInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  CommandInput: makeSelectCommandInput(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommandInput);
