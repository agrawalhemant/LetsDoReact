import { CART_LOGO } from '../Utils/constants';
import { APP_LOGO } from '../Utils/constants';
import { useState } from 'react';

const Header = () => {
  const [btnName, setBtnName] = useState('Log in');
  return (
    <header id="header">
      <img id="logo" src={APP_LOGO} alt="logo" />
      <div id="nav">
        <ul>
          <li className="list-items">Home</li>
          <li className="list-items">About Us</li>
          <li className="list-items">Contact Us</li>
          <li>
            <img id="cart" src={CART_LOGO} alt="cart" />
          </li>
          <li className="list-items">
            <button
              id="login-btn"
              onClick={() => {
                btnName == 'Log in'
                  ? setBtnName('Log out')
                  : setBtnName('Log in');
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
