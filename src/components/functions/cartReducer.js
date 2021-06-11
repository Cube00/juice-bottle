import {ADD_TO_CART, REMOVE_ITEM, INCREASE, DECREASE} from '../layouts/actions'

const defaultStore = {
  cart: [],
  total: 0,
  amount: 0
}

const cartReducer = (state=defaultStore, action) =>{
  if(action.type === ADD_TO_CART){
    return {...state, cart: action.payload}
  }
  if(action.type === REMOVE_ITEM){
    return {...state, cart: action.payload}
  }
  if(action.type === INCREASE){
    let newCart = state.cart.map(cartItem => {
      if(cartItem.id === action.payload.id){
          cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      console.log(action)
      return cartItem;
    });
    return { ...state, cart: newCart };
  }
  if(action.type === DECREASE){
    let newCart = state.cart.map(cartItem => {
      if(cartItem.id === action.payload.id){
        if(cartItem.amount > 1)
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
      }
      console.log(action)
      return cartItem;
    });
    return { ...state, cart: newCart };
  }
  return state
}

export default cartReducer
