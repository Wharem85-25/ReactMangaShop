import React from "react";
import '@styles/Order.scss';

import flecha from '@img/flecha.png';

const Order = () => {
  return (
    <div className="Order">
      <p>
        <span>25/10/2021</span>
        <span>6 Article</span>
      </p>
      <p>$600.00</p>
      <img src={flecha} alt="arrow" />
    </div>
  );
};

export default Order;
