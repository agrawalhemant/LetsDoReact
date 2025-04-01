import React from 'react';
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

const Grocery = lazy(() => import('./Components/Grocery'));

const App = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div>
      <Header />
      {onlineStatus ? <Outlet /> : <h1>Oops! Looks like you're offline</h1>}
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
