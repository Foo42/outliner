import React from 'react';
import PropTypes from 'prop-types';
import { cursorStyling } from './styleGenerator';

function Text({ text, isSelected }) {
  return (<p style={cursorStyling(isSelected)}>{text}</p>);
}

export default Text;

Text.propTypes = {
  text: PropTypes.string,
  isSelected: PropTypes.bool,
};
