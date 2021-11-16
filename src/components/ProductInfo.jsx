import React from "react";
import "@styles/ProductInfo.scss";

import tokyo from '@img/mangaTokyo.jpg';
import addCart from '@img/addCart.png';

const ProductInfo = ({ product }) => {
  return (
    <>
      <img src={product.images[0]} alt="Tokyo Revengers" />
      <div className="product-info">
        <p>$ {product.price}</p>
        <p>{product.title}</p>
        <p>
          {product.description}
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
