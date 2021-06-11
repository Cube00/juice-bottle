import {HOME_PAGE, ABOUT_PAGE, FLAVOUR_PAGE, CONTACT_PAGE} from '../layouts/actions'

const defaultState = {
  link: window.location.pathname
}

const linkReducer = (state = defaultState, action) =>{
  switch(action.type){
    case HOME_PAGE:
      return {...state, link: '/'}
    case ABOUT_PAGE:
      return {...state, link: '/about'}
    case FLAVOUR_PAGE:
      return {...state, link: '/flavours'}
    case CONTACT_PAGE:
      return {...state, link: '/contact'}
    default:
      return state
  }
}

export default linkReducer
