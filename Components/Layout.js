import React from 'react';
import Header from './Header/Header';
const Layout = ({ children }) => {
  return (
    <div>
      <div className="contnent_wrap">
        <div className="content_header">
          <Header />
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
