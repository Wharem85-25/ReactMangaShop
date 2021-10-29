import React from 'react';
import '../assets/styles/ShoppingCartItem.scss';

const ShoppingCartItem = () => {
	return (
		<div class="ShoppingCartItem">
			<figure>
				<img src="../src/assets/img/mangaTokyo.jpg" alt="Tokyo Revengers" />
			</figure>
			<p>Tokyo Revengers</p>
			<p>$130.00</p>
		</div>
	);
};

export default ShoppingCartItem;
