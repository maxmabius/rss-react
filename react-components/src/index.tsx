import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/layout';
import Main from './pages/main';
import CreateForm from './pages/create-form';
import About from './pages/about';
import NoMatch from './pages/no-match';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <Main />,
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

export const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

const root = document.getElementById('root');
if (root) ReactDOM.createRoot(root).render(<App />);
