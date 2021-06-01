import Facebook from '../../assets/images/social/fb.png';
import Instagram from '../../assets/images/social/instagram.png';
import Twitter from '../../assets/images/social/twitter.png';
import Wsp from '../../assets/images/social/wsp.png';

const Social = () =>{
  return <>
    <div className="social-media">
      <ul>
        <li>
          <a href="/">
            <img src={Instagram} alt="/" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={Facebook} alt="/" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={Twitter} alt="/" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={Wsp} alt="/" />
          </a>
        </li>
      </ul>
    </div>
  </>
}

export default Social
