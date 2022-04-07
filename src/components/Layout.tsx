import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Layout: React.FC = () => {
  return (
    <div className="App dark:bg-slate-900">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Layout;
