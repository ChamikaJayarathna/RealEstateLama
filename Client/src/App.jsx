import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ListPage from './pages/ListPage/ListPage';
import Layout from './pages/Layout/Layout';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <HomePage/>
        },
        {
          path: '/list',
          element: <ListPage/>
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App;