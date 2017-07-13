import BulletedNodeList from './BulletedNodeList';
import Text from './Text';
import Heading from './Heading';

export default function Node(node){
  console.log('finding element for ',node);
  switch (node.type) {
    case 'text':
      return Text(node);
    case 'heading':
      return Heading(node);
    case 'bullet-list':
      return BulletedNodeList(node);
    default:
      return 'unknown';
  }
}
