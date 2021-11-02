import React from "react";
import OrderItem from '../components/OrderItem';
import '@assets/styles/MyOrder.scss';

import flecha from '@img/flecha.png';

const MyOrder = () => {
  return (
    <aside class="MyOrder">
      <div class="title-container">
        <img src={flecha} alt="arrow" />
        <p class="title">Shopping Cart</p>
      </div>
      <div class="my-order-content">
				<OrderItem />
        <div class="order">
          <p>
            <span>Total</span>
          </p>
          <p>$600.00</p>
        </div>
      </div>
      <button class="primary-button">Checkout</button>
    </aside>
  );
};

export default MyOrder;
