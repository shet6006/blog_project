import React from 'react';
import Header from './Header';
import Left from './Left';
import Right from './Right';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="grid-container">
      <Header />
      <Left />
      <div className="main">
        <Outlet /> {/* 자식 컴포넌트가 여기에 렌더링됩니다 */}
      </div>
      <Right />
      <Footer />
    </div>
  );
}

export default Layout;
