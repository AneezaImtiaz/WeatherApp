import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="title" >Weather App</h1>
      <div className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><a href="/">Home</a></li>
          <li className="navbar-item"><a href="/favourites">Favourites</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
