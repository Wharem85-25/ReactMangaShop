import React from "react";
import "../assets/styles/ProductInfo.scss";

const ProductInfo = () => {
  return (
    <>
      <img src="../src/assets/img/mangaTokyo.jpg" alt="Tokyo Revengers" />
      <div class="product-info">
        <p>$130.00</p>
        <p>Manga Tokyo Revengers</p>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <button class="primary-button add-to-cart-button">
          <img src="../src/assets/img/addCart.png" alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
