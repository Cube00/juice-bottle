import {PREW_SLIDE, NEXT_SLIDE} from '../actions'
import {data} from '../../data/data1'

const defaultState = {
  id: 0,
  content: data[0]
};

const slideReducer = (state=defaultState, action) =>{
  if(action.type === PREW_SLIDE && state.id !==0){
    return {...state, id: state.id - 1, content: data[state.id - 1]}
  }
  if(action.type === NEXT_SLIDE && state.id < data.length - 1){
    return {...state, id: state.id + 1, content: data[state.id + 1]}
  }
  return state
}

export default slideReducer;
