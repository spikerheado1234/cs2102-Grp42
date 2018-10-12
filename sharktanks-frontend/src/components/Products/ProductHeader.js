import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ProductHeader extends Component {
  componentWillMount() {
    const script = document.createElement('script');

    script.src = '../../js/production.min.js';
    script.async = false;

    document.body.appendChild(script);
  }

  render() {
    // For some reason ID is null. Need to Fix.
    var ID = this.props.router.location.pathname.slice(9);

    var productArray = this.props.products.products.data.filter(function(
      product
    ) {
      return product.projectid === ID;
    });

    var product = productArray[0];

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
            <h1>Product details for {product.title}</h1>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProductHeader);
