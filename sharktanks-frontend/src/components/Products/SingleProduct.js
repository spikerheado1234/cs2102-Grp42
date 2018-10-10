import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductImage from './ProductImage';
import * as api from '../../moltin';

import { UPDATE_QUANTITY } from '../../ducks/product';
import {
  FETCH_CART_START,
  FETCH_CART_END,
  CART_UPDATED
} from '../../ducks/cart';

const mapStateToProps = state => {
  return state;
};

class SingleProduct extends Component {
  render() {
    var products = this.props.products.products;

    var ID = this.props.router.location.pathname.slice(9, 100);

    var productArray = this.props.products.products.data.filter(function(
      product
    ) {
      return product.projectID === ID;
    });

    var product = productArray[0];

    var updateQuantity = quantity => {
      this.props.dispatch(dispatch => {
        dispatch({ type: UPDATE_QUANTITY, payload: quantity });
      });
    };

    var addToCart = id => {
      this.props.dispatch(dispatch => {
        api
          .AddCart(id, this.props.product.quantity)

          .then(cart => {
            console.log(cart);
            dispatch({ type: CART_UPDATED, gotNew: false });
          })

          .then(() => {
            dispatch({ type: FETCH_CART_START, gotNew: false });

            api
              .GetCartItems()

              .then(cart => {
                dispatch({ type: FETCH_CART_END, payload: cart, gotNew: true });
              });
          })
          .catch(e => {
            console.log(e);
          });
      });
    };

    var background = '#fff';

    const category = product => {
      return <div className="manufacturer">Category: {product.categoryID}</div>;
    };

    const tags = product => {
      return (
        <div>
          {product.tags.map(function(elem) {
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
                      addToCart(product.id);
                      console.log(this.props.product.quantity);
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
