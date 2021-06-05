import {BrowserRouter as Router, Link } from "react-router-dom";
import {connect} from 'react-redux'
import {HOME_PAGE, ABOUT_PAGE, FLAVOUR_PAGE, CONTACT_PAGE} from '../actions'
import {RiSearch2Line} from 'react-icons/ri';
import {GiShoppingBag} from 'react-icons/gi';
import Logo from '../../assets/images/logo.png'

const Header = ({link, home, about, flavours, contact}) =>{

  return <header>
    <div className="header-tools">
      <span>
        <RiSearch2Line/>
      </span>
      <span>
        <GiShoppingBag/>
      </span>
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

const functionForHeader = ({linkReducer: {link}}) => {
  return {link}
}

const dispatchForHeader = (dispatch)=>{
  return {
    home: () =>{dispatch({type:HOME_PAGE})},
    about: () =>{dispatch({type:ABOUT_PAGE})},
    flavours: () =>{dispatch({type:FLAVOUR_PAGE})},
    contact: () =>{dispatch({type:CONTACT_PAGE})}
  }
}

export default connect(functionForHeader,dispatchForHeader)(Header)
