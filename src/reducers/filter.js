const initialState = {
	filterBy: 'all',
	searchQuery: ''
};

const filter = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_FILTER':
			return {
				...state,
				filterBy: action.payload
			};
		case 'SET_SEARCH':
			return {
				...state,
				searchQuery: action.payload
			};
		default:
			return state;
	}
};

export default filter;