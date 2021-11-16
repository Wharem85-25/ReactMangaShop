import {useEffect, useState} from 'react';
// import axios from 'axios';

const useGetProducts = () => {
	const [products, setProducts] = useState([])

	useEffect(async () => {
		setProducts(API.Mangas)
	}, [])

	return products;
};

export default useGetProducts;
