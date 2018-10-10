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
      return product.id === ID;
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
                <h2>{product.name}</h2>
                <p className="manufacturer">
                  <span className="hide-content">Manufactured </span>By{' '}
                  <span className="word-mark">
                    Green Jets
                  </span>
                </p>
                {isThereACurrencyPrice()}
                <div className="description">
                  <p className="hide-content">Product details:</p>
                  <p>{product.description}</p>
                </div>
                <form className="product" noValidate>
                  <div className="quantity-input">
                    <p className="hide-content">Product quantity.</p>
                    <p className="hide-content">
                      Change the quantity by using the buttons, or alter the
                      input directly.
                    </p>
                    <button
                      type="button"
                      className="decrement number-button"
                      onClick={() => {
                        updateQuantity(this.props.product.quantity - 5);
                      }}>
                      <span className="hide-content">Decrement quantity</span>
                      <span aria-hidden="true">-</span>
                    </button>
                    <input
                      className="quantity"
                      name="number"
                      type="number"
                      min="1`"
                      max="10"
                      value={this.props.product.quantity}
                      size="2"
                      onChange={event => {
                        updateQuantity(event.target.value);
                      }}
                    />
                    <button
                      type="button"
                      className="increment number-button"
                      onClick={() => {
                        updateQuantity(this.props.product.quantity + 5);
                      }}>
                      <span className="hide-content">Increment quantity</span>
                      <span aria-hidden="true">+</span>
                    </button>
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
                  <h3>Project details</h3>
                </div>
                <div className="details-body">
                  <div className="row">
                    <div className="label">Title</div>
                    <div className="value">Green Jet Pack</div>
                  </div>
                  <div className="row">
                    <div className="label">Description</div>
                    <div className="value">Jet pack made from recyclable materials</div>
                  </div>
                  <div className="row">
                    <div className="label">Start date</div>
                    <div className="value">{product.start_date}</div>
                  </div>
                  <div className="row">
                    <div className="label">Duration</div>
                    <div className="value">{product.duration}</div>
                  </div>
                  <div className="row">
                    <div className="label">Status</div>
                    <div className="value">{product.status}</div>
                  </div>
                  <div className="row">
                    <div className="label">Donations</div>
                    <div className="value">{product.donations}</div>
                  </div>

                </div>
              </div>
              <div className="product-details">
                <div className="header">
                  <h3>Miscellaneous</h3>
                </div>
                <div className="details-body">
                  <div className="row">
                    <div className="label">Categories</div>
                    <div className="value">Technology, Design, Ecological</div>
                  </div>
                  <div className="row">
                    <div className="label">Keywords</div>
                    <div className="value">jet, pack, green, fly</div>
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
