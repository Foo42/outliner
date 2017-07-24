import React from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading';
import { cursorStyling } from './styleGenerator';

function NodeList({ childItems, isSelected }) {
  const mapped = childItems.map((item) => (<Heading {...item} />));
  return (<section style={cursorStyling(isSelected)}>{mapped}</section>);
}

NodeList.propTypes = {
  childItems: PropTypes.array,
  isSelected: PropTypes.bool,
};

export default NodeList;
