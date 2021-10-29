import React from 'react';
import '../assets/styles/OrderItem.scss'

const OrderItem = () => {
	return (
		<>
			<div class="OrderItem">
				<figure>
					<img src="../src/assets/img/mangaTokyo.jpg" alt="Tokyo Revengers"/>
				</figure>
				<p>Tokyo Revengers</p>
				<p>$130.00</p>
				<img src="../src/assets/img/close.png" alt="close"/>
			</div>
		</>
	);
};

export default OrderItem;
