import React from 'react';
import './Header.css';
import {APP_TITLE, ROUTES} from '../../utils/Constants';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="title" >{APP_TITLE}</h1>
      <div className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><a href="/">{ROUTES.home}</a></li>
          <li className="navbar-item"><a href="/favourites">{ROUTES.favourites}</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
