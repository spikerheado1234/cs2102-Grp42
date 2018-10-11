import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductImage from './ProductImage';
import * as api from '../../moltin';

import { UPDATE_QUANTITY } from '../../ducks/product';

const axios = require('axios');

const mapStateToProps = state => {
  return state;
};

class SingleProduct extends Component {
  render() {
    var products = this.props.products.products;
    // The id is null for some reason. Must fix. 
    var ID = this.props.router.location.pathname.slice(9);
    var productArray = this.props.products.products.data.filter(function(
      product
    ) {
      return product.projectid === ID;
    });

    var wordsArr = [];
    productArray.map((product) => {
      wordsArr.push(product.words);
    });
    var product = productArray[0];
    product.words = wordsArr;
    console.log(product);

    var updateQuantity = quantity => {
      this.props.dispatch(dispatch => {
        dispatch({ type: UPDATE_QUANTITY, payload: quantity });
      });
    };

    // Test post request.
    var persistAmount = (amount) => {
      axios.post('http://localhost:8080/giveDonation', {
        projectID: ID, 
        userID: '1',
        amount: amount
      }).then(res => {
        console.log(res.data);
      });
    }

    var background = product.background_colour;

    function isThereACurrencyPrice() {
      try {
        return (
          <p className="price">
            <span className="hide-content">Unit price </span>
            {'$' + product.meta.display_price.with_tax.amount / 100}
          </p>
        );
      } catch (e) {
        return <div className="price">Price not available</div>;
      }
    }

    var background = '#fff';

    const category = product => {
      return <div className="manufacturer">Category: {product.categoryID}</div>;
    };

    const tags = product => {
      return (
        <div>
          {product.words.map(function(elem) {
            return (
              <div style={{ display: 'inline' }} class="tag">
                {elem}{' '}
              </div>
            );
          })}
        </div>
      );
    };
    return (
      <main role="main" id="container" className="main-container push">
        <section className="product">
          <div className="content">
            <div className="product-listing">
              <div className="product-image">
                <ProductImage
                  product={product}
                  products={products}
                  background={background}
                />
              </div>
              <div className="product-description">
                <h2>{product.title}</h2>
                <p className="manufacturer">
                  <span className="hide-content">Created </span>By{' '}
                  <span className="word-mark">{product.userID}</span>
                </p>
                {category(product)}
                {tags(product)}
                <div className="description">
                  <p className="hide-content">Project details:</p>
                  <p>{product.description}</p>
                </div>
                <form className="product" noValidate>
                  <div className="quantity-input">
                    <p className="hide-content">Project quantity.</p>
                    <p className="hide-content">
                      Change the invest amount by using the input box.
                    </p>
                    <input
                      className="quantity"
                      name="number"
                      type="number"
                      min="1`"
                      max="20000000"
                      value={this.props.product.quantity}
                      size="2"
                      onChange={event => {
                        updateQuantity(event.target.value);
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="submit"
                    onClick={e => {
                      console.log(this.props.product.quantity);
                      persistAmount(this.props.product.quantity);
                      e.preventDefault();
                    }}>
                    Invest
                  </button>
                </form>
              </div>
            </div>
            <div className="product-info">
              <div className="product-details">
                <div className="header">
                  <h3>Other Project details</h3>
                </div>

                <div className="details-body">
                  <div className="row">
                    <div className="label">Duration</div>
                    <div className="value">{product.duration}</div>
                  </div>

                  <div className="row">
                    <div className="label">Start Date</div>
                    <div className="value">{product.startdate}</div>
                  </div>

                  <div className="row">
                    <div className="label"> Money Raised </div>
                    <div className="value"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default connect(mapStateToProps)(SingleProduct);
