import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/layout';
import Main from './pages/main';
import CreateForm from './pages/create-form';
import About from './pages/about';
import NoMatch from './pages/no-match';

import * as api from './api';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <Main />,
        loader: api.usersLoader,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/create',
        element: <CreateForm />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
