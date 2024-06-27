import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const handleSettings = () => {
    navigate(`/settings`);
  }
  return (
    <header className="header">
      <h1>Header</h1>
      <button onClick={handleSettings}>설정</button>
    </header>
  );
}

export default Header;
