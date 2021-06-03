import {BrowserRouter as Router, Link } from "react-router-dom";

import {RiSearch2Line} from 'react-icons/ri';
import {GiShoppingBag} from 'react-icons/gi';
import Logo from '../../assets/images/logo.png'

const Header = () =>{
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
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/flavours'>Flavours</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>

    </div>
  </header>
}

export default Header
