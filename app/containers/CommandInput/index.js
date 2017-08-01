/*
 *
 * CommandInput
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectCommandInput from './selectors';

import { clearCommandString, addToCommandString } from './actions';
import { moveCursorDown } from '../Outliner/actions';

function buildCommand(currentCommandString, newestChar) {
  const commandString = currentCommandString + newestChar;
  console.log('command string', commandString);
  if (commandString === 'j') {
    return moveCursorDown();
  }
  return false;
}

function commandUpdated(currentCommandString, dispatch) {
  return (event) => {
    console.log('event', Object.keys(event));
    const command = buildCommand(currentCommandString, event.key);
    if (command) {
      dispatch(command);
      dispatch(clearCommandString());
    } else {
      dispatch(addToCommandString(event.key));
    }
  };
}

export class CommandInput extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const dispatch = this.props.dispatch;
    const { currentCommandString } = this.props.CommandInput;
    console.log('disable', dispatch);
    return (
        <input autoFocus placeholder="commands" value={currentCommandString} onKeyUp={commandUpdated(currentCommandString, dispatch)}></input>
    );
  }
}

CommandInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
  CommandInput: PropTypes.shape({
    currentCommandString: PropTypes.string,
  }),
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
