import React from 'react';
import '../assets/styles/ProductItem.scss';

const ProductItem = () => {
	return (
		<div class="ProductItem">
			<img src="../src/assets/img/mangaTokyo.jpg" alt="Manga-Tokyo-Revengers" class="product-img" />
			<div class="product-info">
				<div>
					<p>$130.00</p>
					<p>Manga Tokyo Revengers</p>
				</div>
			<figure>
				<img src="../src/assets/img/add-carrito.png" />
			</figure>
			</div>
		</div>
	);
};

export default ProductItem;
