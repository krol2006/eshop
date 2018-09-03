import { combineReducers } from 'redux';
import cart from './cart';
import products from './products';
import filter from './filter';

const rootReducer = combineReducers({
	cart,
	products,
	filter
});

export default rootReducer;