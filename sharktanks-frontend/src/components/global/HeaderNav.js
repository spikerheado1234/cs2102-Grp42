import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => (
  <div className="nav-container">
    <nav className="primary-nav light">
      <Link to="/products">Projects</Link>
      <Link to="/styles">Styles</Link>
    </nav>
    <div className="logo light">
      <Link to="/" className="logo-link">
        <div className="header-content">
        <span className="content">
          <font size="12" text-align="center">SHARKSTANK</font>
        </span>
        </div>
      </Link>
    </div>
  </div>
);

export default HeaderNav;
