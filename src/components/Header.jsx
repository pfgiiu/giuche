import React from 'react';
import './styles/header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Meu Evento</h1>
      </div>
      <div className="header-notifications">
        <span>🔔</span>
      </div>
    </header>
  );
}

export default Header;