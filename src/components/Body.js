import React from 'react'
import Browse from './Browse';
import Login from './Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Body = () => {
  // const navigate = useNavigate(); // cannot use effiectly since router is described here.

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    { 
      path: '/browse',
      element: <Browse />
    }

  ])


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body