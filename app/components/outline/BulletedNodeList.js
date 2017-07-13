import React from 'react';
import Node from './Node';

function ItemWrapper(item){
  const Inner = (<Node {...item}/>);
  if(item.type === 'bullet-list'){
    return Inner;
  }
  return (<li key={item.key}>{Inner}</li>);
}
export default function BulletedNodeList({childItems}){
  const mapped = childItems.map(ItemWrapper);
  return (<ul>{mapped}</ul>);
}
