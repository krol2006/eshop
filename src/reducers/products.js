const initialState = {
	isReady: false,
	items: null,
	currentProduct: {}
};

const products = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_PRODUCTS':
			return {
				...state,
				items: action.payload,
				isReady: true,
				currentProduct: {}
			};
		case 'SET_CURRENT_PRODUCT':
			return {
				...state,
				currentProduct: action.payload
			};
		case 'SET_IS_READY':
			return {
				...state,
				isReady: action.payload
			};
		default:
			return state;
	}
};

export default products;