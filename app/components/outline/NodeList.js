import React from 'react';
import Heading from './Heading';

export default function NodeList({childItems}){
  const mapped = childItems.map(item => (<Heading {...item}/>));
  return (<section>{mapped}</section>);
}

// How do we want to render child items?
/* Each element in tree is either a leaf or a subtree. Each leaf does nto need to worry about child items by definition.
Subtrees should enumerate each of their children mapping it into the correct element type
*/
