import React, {useContext, useState} from 'react';
import AppContext from '@context/AppContext';
import '@styles/ProductItem.scss';
import addCarrito from '@img/add-carrito.png';


const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = (item) => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} className="product-img" />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
			<figure onClick={() => handleClick(product)}>
				<img src={addCarrito} alt="Add-carrito"/>
			</figure>
			</div>
		</div>
	);
};

export default ProductItem;
