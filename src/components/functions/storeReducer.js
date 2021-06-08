import {ADD_TO_CART} from '../actions'
const defaultStore = {
  allow: true,
  store: []
}

const storeReducer = (state = defaultStore, action) =>{
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, store: action.payload, allow: true}
    default:
      return state
  }
}

export default storeReducer
