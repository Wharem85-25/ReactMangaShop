import React from "react";
import "@styles/ProductInfo.scss";

import tokyo from '@img/mangaTokyo.jpg';
import addCart from '@img/addCart.png';

const ProductInfo = () => {
  return (
    <>
      <img src={tokyo} alt="Tokyo Revengers" />
      <div className="product-info">
        <p>$130.00</p>
        <p>Manga Tokyo Revengers</p>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <button className="primary-button add-to-cart-button">
          <img src={addCart} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
