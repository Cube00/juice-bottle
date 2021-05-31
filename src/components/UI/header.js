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
            Home
          </li>
          <li>
            About
          </li>
          <li>
            Flavours
          </li>
          <li>
            Contact
          </li>
        </ul>
      </nav>
    </div>
  </header>
}

export default Header
