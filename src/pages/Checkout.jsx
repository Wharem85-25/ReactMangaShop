import React, { useState, useContext} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '@styles/Checkout.scss';

const Checkout = ({ product }) => {
	const [toggle, setToggle] = useState(false);


	return (
		<div className="Checkout">
			<div className="my-order-container">
				<h1 className="title">My order</h1>
				<div className="my-order-content">
					<div className="order">
						<p>
							<span>25/10/2021</span>
							<span>6 Article</span>
						</p>
						<p>$600.00</p>
					</div>
					{toggle && <OrderItem />}
				</div>
			</div>
		</div>
	);
};

export default Checkout;
