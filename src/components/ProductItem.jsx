import React from 'react';
import '@styles/ProductItem.scss';

import tokyo from '@img/mangaTokyo.jpg';
import addCarrito from '@img/add-carrito.png';

const ProductItem = () => {
	return (
		<div class="ProductItem">
			<img src={tokyo} alt="Manga-Tokyo-Revengers" class="product-img" />
			<div class="product-info">
				<div>
					<p>$130.00</p>
					<p>Manga Tokyo Revengers</p>
				</div>
			<figure>
				<img src={addCarrito} alt="Add-carrito"/>
			</figure>
			</div>
		</div>
	);
};

export default ProductItem;
