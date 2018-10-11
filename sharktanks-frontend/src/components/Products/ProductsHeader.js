import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ProductsHeader extends Component {
  render() {
    return (
      <header className="push">
        <div className="nav-container">
          <nav className="primary-nav">
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
          <nav className="secondary-nav">
          </nav>
        </div>
        <div className="header-container hide-content">
          <div className="content">
            <h1>Products listing</h1>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProductsHeader);
