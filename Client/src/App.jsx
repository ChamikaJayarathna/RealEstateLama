import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ListPage from './pages/ListPage/ListPage';
import Layout from './pages/Layout/Layout';
import SinglePage from './pages/SinglePage/SinglePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LoginPage from './pages/LoginPage/LoginPage';

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
        },
        {
          path: '/:id',
          element: <SinglePage/>
        },
        {
          path: '/profile',
          element: <ProfilePage/>
        },
        {
          path: '/login',
          element: <LoginPage/>
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App;