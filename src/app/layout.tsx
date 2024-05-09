import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import './globals.css'


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer email={''} phone={''} address={''} />
        </div>
      </body>
    </html>

  );
};

export default Layout;