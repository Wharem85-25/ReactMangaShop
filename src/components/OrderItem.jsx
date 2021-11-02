import React from 'react';
import '@styles/OrderItem.scss'

import tokyo from '@img/mangaTokyo.jpg';
import close from '@img/close.png';

const OrderItem = () => {
	return (
		<>
			<div class="OrderItem">
				<figure>
					<img src={tokyo} alt="Tokyo Revengers"/>
				</figure>
				<p>Tokyo Revengers</p>
				<p>$130.00</p>
				<img src={close} alt="close"/>
			</div>
		</>
	);
};

export default OrderItem;
