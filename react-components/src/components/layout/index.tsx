import * as React from 'react';
import { Outlet } from 'react-router-dom';

import PageHeader from '../page-header';

import './index.css';

export default function Layout() {
  return (
    <div className="wrapper">
      <PageHeader />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
