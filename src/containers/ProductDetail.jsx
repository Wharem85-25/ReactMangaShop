import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '../assets/styles/ProductDetail.scss';

const ProductDetail = () => {
	return (
		<aside class="ProductDetail">
		<div class="product-detail-close">
			<img src="../src/assets/img/close.png" alt="close" />
		</div>
			<ProductInfo />
	</aside>
	);
};

export default ProductDetail;
