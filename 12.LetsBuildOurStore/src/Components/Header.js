import { CART_LOGO } from '../Utils/constants';
import { APP_LOGO } from '../Utils/constants';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Utils/Hooks/useOnlineStatus';
import UserContext from '../Utils/Contexts/UserContext';

const Header = () => {
  const [btnName, setBtnName] = useState('Log in');
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    // console.log('useEffect called in Header');
  }, [btnName]);

  const { username } = useContext(UserContext);
  console.log('username: ' + username);
  return (
    <header className="flex justify-between sticky top-0 z-1 bg-fuchsia-100">
      <img
        className="w-24 h-24 m-2 ease-in-out transition hover:rotate-360 duration-1500"
        src={APP_LOGO}
        alt="logo"
      />
      <ul className="flex items-center">
        <li className="mx-4" id="online-status">
          Status: {onlineStatus ? '🟢' : '🟥'}
        </li>
        <li className="mx-4 hover:font-semibold hover:text-gray-500">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-4 hover:font-semibold hover:text-gray-500">
          <Link to="/about">About Us</Link>
        </li>
        <li className="mx-4 hover:font-semibold hover:text-gray-500">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="mx-4 hover:font-semibold hover:text-gray-500">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="hover:scale-120 transition duration-200 ease-in-out">
          <div className="w-6 h-6 text-center pt-0.5 ml-7 text-sm -z-10 absolute bg-green-500 rounded-full">
            5
          </div>
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
        <li className="mx-4 font-bold">{username}</li>
      </ul>
    </header>
  );
};

export default Header;
