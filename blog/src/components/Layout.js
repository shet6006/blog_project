import React, { useContext } from 'react';
import Header from './Header';
import Left from './Left';
import Right from './Right';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { AppDataContext } from './DataContext';

function Layout() {
  const { loading, error } = useContext(AppDataContext);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
