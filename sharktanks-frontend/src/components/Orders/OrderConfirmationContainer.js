import React, { Component } from 'react';
import OrderConfirmation from './OrderConfirmation';

class OrderConfirmationContainer extends Component {
  componentWillMount() {
    const script = document.createElement('script');

    script.src = '../../js/production.min.js';
    script.async = false;

    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        <OrderConfirmation />
      </div>
    );
  }
}

export default OrderConfirmationContainer;
