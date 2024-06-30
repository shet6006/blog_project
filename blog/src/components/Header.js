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
      <button className="setting" onClick={handleSettings}>
        <img src="images/settings.png"></img>
        <span className="tooltip">설정</span>
      </button>
    </header>
  );
}

export default Header;
