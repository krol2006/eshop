export const setProducts = products => ({
	type: 'SET_PRODUCTS',
	payload: products
});

export const setCurrentProduct = product => ({
	type: 'SET_CURRENT_PRODUCT',
	payload: product
});