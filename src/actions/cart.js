export const addProduct = product => ({
	type: 'ADD_PRODUCT',
	payload: product
});

export const removeProduct = title => ({
	type: 'REMOVE_PRODUCT',
	payload: title
});

export const removeProductAll = id => ({
	type: 'REMOVE_PRODUCT_ALL',
	payload: id
});