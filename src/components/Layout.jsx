import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-grid">
      <Navbar />
      <main style={{ flexGrow: 1 }} className="pt-section">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
