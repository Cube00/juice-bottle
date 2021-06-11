import {useState} from 'react'
import {Link } from "react-router-dom"
import {connect} from 'react-redux'
import { HOME_PAGE,
  ABOUT_PAGE,
  FLAVOUR_PAGE,
  CONTACT_PAGE,
  REMOVE_ITEM,
} from '../layouts/actions'
import {RiSearch2Line} from 'react-icons/ri'
import {GiShoppingBag} from 'react-icons/gi'
import {GrFormClose} from 'react-icons/gr'
import Logo from '../../assets/images/logo.png'
import CartItem from './cartItem'

const Header = ({link, home, about, flavours, contact, cart, remove,itemInc}) =>{
  const [state, setState] = useState('invisible');

  const stateFunction = () =>{
    if(state === 'invisible'){
      setState('visible')
    }else if(state==='visible'){
      setState('invisible')
    }
  }

  return <header>
    <div className="header-tools">
      <span>
        <RiSearch2Line/>
      </span>
      <span onClick={()=>stateFunction()}>
        <GiShoppingBag/>
      </span>
      <div className={state === 'visible' ? 'store visible' : 'store invisible'}>
        <h1>Store</h1>
        <span onClick={()=>{stateFunction()}}><GrFormClose /></span>
        {cart.map((store)=>{
          return <CartItem
            key={store.id}
            id={store.id}
            remove={()=>{remove(cart, store)}}
            store={store}
            />
        })}
        <h2 className="total-price">
          Total price: {cart.reduce((acc,curr)=>{
            return (acc += (curr.price * curr.amount))
          },0)}$
        </h2>
      </div>
    </div>
    <div className="header-content">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link onClick={home} to='/' className={link === '/' ? 'activeLink' : null}>Home</Link>
          </li>
          <li>
            <Link onClick={about} to='/about' className={link === '/about' ? 'activeLink' : null}>About</Link>
          </li>
          <li>
            <Link onClick={flavours} to='/flavours' className={link === '/flavours' ? 'activeLink' : null}>Flavours</Link>
          </li>
          <li>
            <Link onClick={contact} to='/contact' className={link === '/contact' ? 'activeLink' : null}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
}

const functionForHeader = ({cartReducer: {cart}, linkReducer: {link}}) => {
  return {link,cart}
}

const dispatchForHeader = (dispatch)=>{
  return {
    home: () =>{dispatch({type:HOME_PAGE})},
    about: () =>{dispatch({type:ABOUT_PAGE})},
    flavours: () =>{dispatch({type:FLAVOUR_PAGE})},
    contact: () =>{dispatch({type:CONTACT_PAGE})},
    remove: (cart, item)=>{
      const filterItem = cart.filter((e)=>e.id !== item.id);
      dispatch({type: REMOVE_ITEM, payload: [...filterItem]})
    },
  }
}

export default connect(functionForHeader,dispatchForHeader)(Header)
