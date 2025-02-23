import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';

/*
 *  Header
 *      - Logo
 *      - Navigation (Home, About Us, Contact Us, Cart)
 *  Body
 *     - Search bar
 *    - Restaurants List
 *  Footer
 *    - Social Media Links
 *    - Copyright
 *    - Address
 *
 */

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
    //Footer
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
