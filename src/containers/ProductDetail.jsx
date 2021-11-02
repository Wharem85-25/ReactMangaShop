import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '@styles/ProductDetail.scss';

import close from '@img/close.png';

const ProductDetail = () => {
	return (
		<aside class="ProductDetail">
		<div class="product-detail-close">
			<img src={close} alt="close" />
		</div>
			<ProductInfo />
	</aside>
	);
};

export default ProductDetail;
