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
				items: filter(state.items, (el, i) => i !== state.items.map(mEl => mEl.id === action.payload).lastIndexOf(true))
			};
		case 'REMOVE_PRODUCT_ALL':
			return {
				...state,
				items: remove(state.items, o => o.id !== action.payload)
			};
		default:
			return state;
	}
});



export default cart;