import React from 'react';
import PropTypes from 'prop-types';
import { cursorStyling } from './styleGenerator';

function Heading({ text, isSelected }) {
  return (<h2 style={cursorStyling(isSelected)}>{text}</h2>);
}

Heading.propTypes = {
  text: PropTypes.string,
  isSelected: PropTypes.bool,
};

export default Heading;
