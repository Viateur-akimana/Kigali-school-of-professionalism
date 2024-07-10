import React from 'react';
import Navbar from '../components/admin/Navbar';
import Sidebar from '../components/admin/Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='hidden md:block h-[100vh] w-[300px]'>
          <Sidebar />
        </div>
        <div className='p-5 w-full md:max-w-[1140px]'>{children}</div>
      </div>
    </>
  );
};

export default Layout;
