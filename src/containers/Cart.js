import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from "../actions/cart";
import uniqBy from 'lodash/uniqBy';
import groupBy from 'lodash/groupBy';
import Cart from '../components/Cart';

const mapStateToProps = ({ cart }) => {
	return {
		addedCount: groupBy(cart.items, item => item.id),
		items: uniqBy(cart.items, item => item.id),
		totalPrice: cart.items.reduce((total, product) => total + product.price, 0),
		count: cart.items.length
	}
};

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);