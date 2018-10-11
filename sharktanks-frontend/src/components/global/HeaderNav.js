import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => (
  <div className="nav-container">
    <nav className="primary-nav light">
      <Link to="/products">Projects</Link>
      <Link to="/styles">Categories</Link>
    </nav>
    <div className="logo light">
      <Link to="/" className="logo-link" style={{ textDecoration: 'none' }}>
        <div className="header-content">
        <span className="content">
          <font size="12" text-align="center">SHARKTANKS</font>
        </span>
        </div>
      </Link>
    </div>
  </div>
);

export default HeaderNav;
