import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './Components/Error';
import About from './Components/About';
import Contact from './Components/Contact';
import Restaurantmenu from './Components/Restaurantmenu';
import useOnlineStatus from './Utils/Hooks/useOnlineStatus';
import Loader from './Components/Loader';
import { lazy, Suspense } from 'react';
import { useState, useContext } from 'react';
import UserContext from './Utils/Contexts/UserContext';

const Grocery = lazy(() => import('./Components/Grocery'));
const About = lazy(() => import('./Components/About'));

const App = () => {
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    //code to authenticate the user and get the username and mobile number
    const data = {
      username: 'Hemant',
    };
    setUserName(data.username);
  }, []);

  const userDetails = useContext(UserContext);
  const [userName, setUserName] = useState(userDetails.username);
  return (
    <div>
      <UserContext.Provider value={{ username: userName, setUserName }}>
        <Header />
        {onlineStatus ? <Outlet /> : <h1>Oops! Looks like you're offline</h1>}
      </UserContext.Provider>
    </div>
  );
};

var appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Body /> },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      { path: '/contact', element: <Contact /> },
      { path: '/restaurant/:id', element: <Restaurantmenu /> },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<Loader />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
