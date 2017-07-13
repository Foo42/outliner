/*
 *
 * Outliner reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const outline = {type:'bullet-list', childItems:[{type:'text', text:'Hello'}, {type:'text', text:'World'}, {type:'bullet-list', childItems:[{type:'text', text: 'Hello sublists!'}]}]}

function updateKeys(outline, key){
  const withUpdatedKey = outline.set('key', key);
  if(!outline.get('childItems')){
    return withUpdatedKey;
  }
  const updatedChildItems = outline.get('childItems').map((item, i) => updateKeys(item, `${key}.${i}`));
  return withUpdatedKey.set('childItems', updatedChildItems);
}

const initialState = fromJS({}).set('outline', updateKeys(fromJS(outline), 0));
console.log('initial state', initialState.toJS());
function outlinerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default outlinerReducer;
