import React from "react";
import '../assets/styles/Order.scss';

const Order = () => {
  return (
    <div class="Order">
      <p>
        <span>25/10/2021</span>
        <span>6 Article</span>
      </p>
      <p>$600.00</p>
      <img src="../src/assets/img/flecha.png" alt="arrow" />
    </div>
  );
};

export default Order;
