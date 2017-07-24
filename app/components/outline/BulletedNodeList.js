import React from 'react';
import PropTypes from 'prop-types';
import Node from './Node';
import { cursorStyling } from './styleGenerator';

function ItemWrapper(item) {
  const Inner = (<Node {...item} />);
  if (item.type === 'bullet-list') {
    return Inner;
  }
  return (<li style={cursorStyling(item.isSelected)} key={item.key}>{Inner}</li>);
}

function BulletedNodeList({ childItems }) {
  const mapped = childItems.map(ItemWrapper);
  return (<ul>{mapped}</ul>);
}

BulletedNodeList.propTypes = {
  childItems: PropTypes.array,
};
export default BulletedNodeList;
