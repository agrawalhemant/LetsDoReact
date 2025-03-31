import { CART_LOGO } from '../Utils/constants';
import { APP_LOGO } from '../Utils/constants';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Utils/Hooks/useOnlineStatus';

const Header = () => {
  const [btnName, setBtnName] = useState('Log in');
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    // console.log('useEffect called in Header');
  }, [btnName]);
  return (
    <header className="flex justify-between sticky top-0 z-1 bg-fuchsia-100">
      <img
        className="w-24 h-24 m-2 ease-in-out transition hover:rotate-360"
        src={APP_LOGO}
        alt="logo"
      />
      <ul className="flex items-center">
        <li className="mx-4" id="online-status">
          Status: {onlineStatus ? '🟢' : '🟥'}
        </li>
        <li className="mx-4">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-4">
          <Link to="/about">About Us</Link>
        </li>
        <li className="mx-4">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="mx-4">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li>
          <img className="w-12" id="cart" src={CART_LOGO} alt="cart" />
        </li>
        <li className="mx-4">
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
    </header>
  );
};

export default Header;
