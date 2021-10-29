import React from 'react';
import OrderItem from '../components/OrderItem';
import '../assets/styles/Orders.scss';

const Orders = () => {
	return (
		<div class="Orders">
			<div class="my-order-container">
				<h1 class="title">My order</h1>
				<div class="my-order-content">
					<div class="order">
						<p>
							<span>25/10/2021</span>
							<span>6 Article</span>
						</p>
						<p>$600.00</p>
					</div>
					<OrderItem />
				</div>
			</div>
		</div>
	);
};

export default Orders;
