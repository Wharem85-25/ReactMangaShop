import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import API from '@API/ApiMangaShop.json'
import '@styles/OrderItem.scss'

import tokyo from '@img/mangaTokyo.jpg';
import close from '@img/close.png';

const OrderItem = () => {
	return (
		<>
			<div className="OrderItem">
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
