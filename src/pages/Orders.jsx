import React, { useState, useContext} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '@styles/Orders.scss';

const Orders = (product) => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="Orders">
			<div className="my-order-container">
				<h1 className="title">My order</h1>
				<div className="my-order-content">
					{toggle && <OrderItem />}
				</div>
			</div>
		</div>
	);
};

export default Orders;
