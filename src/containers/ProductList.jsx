import React, {useEffect, useState} from 'react';
import ProductItem from '@components/ProductItem';
import API from '@API/ApiMangaShop.json';
import '@styles/ProductList.scss';
// import useGetProducts from '@hooks/useGetProducts';

const ProductList = () => {
	const [products, setProducts] = useState([])

	useEffect(async () => {
		setProducts(API.Mangas)
	}, [])

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product={product} key={product.id}/>
				))}
			</div>
		</section>
	);
};

export default ProductList;
