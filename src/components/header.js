import React from 'react';
import '../styles/header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="left-items">
        <NavLink
          to="/"
          className="hero-button"
        >
          SUITS | Booking System
        </NavLink>
      </div>
      <div className="right-items">
        {/* Home */}
      </div>
    </header>
  );
}

export default Header;
