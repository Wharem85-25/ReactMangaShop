import React from 'react';
import '@styles/ShoppingCartItem.scss';

import tokyo from '@img/mangaTokyo.jpg';

const ShoppingCartItem = () => {
	return (
		<div className="ShoppingCartItem">
			<figure>
				<img src={tokyo} alt="Tokyo Revengers" />
			</figure>
			<p>Tokyo Revengers</p>
			<p>$130.00</p>
		</div>
	);
};

export default ShoppingCartItem;
