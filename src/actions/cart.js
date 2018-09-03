export const addProduct = product => ({
	type: 'ADD_PRODUCT',
	payload: product
});

export const removeProduct = id => ({
	type: 'REMOVE_PRODUCT',
	payload: id
});

export const removeProductAll = id => ({
	type: 'REMOVE_PRODUCT_ALL',
	payload: id
});