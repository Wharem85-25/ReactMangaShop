import React from 'react';
import OrderItem from '../components/OrderItem';
import '@styles/Orders.scss';

const Orders = () => {
	return (
		<div class="Orders">
			<div class="my-order-container">
				<h1 class="title">My order</h1>
				<div class="my-order-content">
					<OrderItem />
					<OrderItem />
				</div>
			</div>
		</div>
	);
};

export default Orders;
