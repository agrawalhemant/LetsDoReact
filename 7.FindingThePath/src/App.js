import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './Components/Error';
import About from './Components/About';
import Contact from './Components/Contact';
import Restaurantmenu from './Components//Restaurantmenu';

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

var appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/restaurant/:id', element: <Restaurantmenu /> },
    ],
    errorElement: <Error />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
