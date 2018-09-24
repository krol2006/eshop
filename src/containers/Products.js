import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productsActions from "../actions/products";
import * as cartActions from "../actions/cart";
import orderBy from 'lodash/orderBy';
import filter from 'lodash/filter';
import Products from '../components/Products';

const filterProducts = (items, filterBy, searchQuery) => {
	items = filter(
		items,
		o =>
			o.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
			o.description.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
	);

	switch (filterBy){
		case 'all':
			return items;
		case 'popular':
			return orderBy(items, 'rating');
		case 'cheap':
			return orderBy(items, 'price', 'desc');
		case 'expensive':
			return orderBy(items, 'price');
		case 'author':
			return orderBy(items, 'author');
		case 'hello':
			return filter(items, { 'category': 'hello' });
		case 'kizlo':
			return filter(items, { 'category': 'kizlo' });
		default:
			return items;
	}
};

const mapStateToProps = ({ products, filter }) => {
	const items = filterProducts(products.items, filter.filterBy, filter.searchQuery);

	return {
		products: items,
		isReady: products.isReady
	}
};

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(productsActions, dispatch),
	...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);