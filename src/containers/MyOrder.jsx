import React, { useContext } from "react";
import OrderItem from '@components/OrderItem';
import AppContext from "@context/AppContext";
import '@styles/MyOrder.scss';

import flecha from '@img/flecha.png';

const MyOrder = () => {
  const { state } = useContext(AppContext)
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={flecha} alt="arrow" />
        <p className="title">Shopping Cart</p>
      </div>
      <div className="my-order-content">
        {state.cart.map(product => (
				  <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$600.00</p>
        </div>
      </div>
      <button className="primary-button">Checkout</button>
    </aside>
  );
};

export default MyOrder;
