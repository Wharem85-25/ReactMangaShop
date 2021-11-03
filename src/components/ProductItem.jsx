import React, {useState} from 'react';
import '@styles/ProductItem.scss';

import tokyo from '@img/mangaTokyo.jpg';
import addCarrito from '@img/add-carrito.png';

const ProductItem = () => {
	const [cart, setCart] = useState([]);

	const handleClick = () => {
		setCart([]);
	}

	return (
		<div class="ProductItem">
			<img src={product.images[0]} alt="Manga-Tokyo-Revengers" class="product-img" />
			<div class="product-info">
				<div>
					<p>$130.00</p>
					<p>Manga Tokyo Revengers</p>
				</div>
			<figure onClick={handleClick}>
				<img src={addCarrito} alt="Add-carrito"/>
			</figure>
			</div>
		</div>
	);
};

export default ProductItem;
