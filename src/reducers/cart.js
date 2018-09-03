import filter from 'lodash/filter';
import remove from 'lodash/remove';

const initialState = {
	items: []
};

const cart = ((state = initialState, action) => {
	switch (action.type){
		case 'ADD_PRODUCT':
			return {
				...state,
				items: [
					...state.items,
					action.payload
				]
			};
		case 'REMOVE_PRODUCT':
			return {
				...state,
				items: filter(state.items, (el, o) => o !== filter(state.items, { id: action.payload }).length - 1)
			};
		case 'REMOVE_PRODUCT_ALL':
			return {
				...state,
				items: remove(state.item, o => o.id !== action.payload)
			};
		default:
			return state;
	}
});



export default cart;