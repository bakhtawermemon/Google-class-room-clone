import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardLayout from './Navbar';

const Layout = () => {
  return (
    <div>
      <DashboardLayout />
      <Outlet />
    </div>
  );
};

export default Layout;
