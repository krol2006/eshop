import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from "../actions/cart";
import uniqBy from 'lodash/uniqBy';
import groupBy from 'lodash/groupBy';

class Cart extends Component {
	constructor(){
		super();

		this.state = {
			numberInput: 0
		};

		this.increaseNumber = this.increaseNumber.bind(this);
		this.decreaseNumber = this.decreaseNumber.bind(this);
		this.removeProductAll = this.removeProductAll.bind(this);
	}

	increaseNumber(item) {
		this.props.addProduct(item);
	}

	decreaseNumber(id){
		const { removeProduct } = this.props;
		removeProduct(id);
	}

	removeProductAll(id) {
		const { removeProductAll } = this.props;
		removeProductAll(id);
	}

	render(){
		const { totalPrice, count, items, removeProduct, addedCount } = this.props;

		return (
			<React.Fragment>
				<div>Total price: {totalPrice}</div>
				<div>Total products: {count}</div>

				<div>
					<p>Products in cart</p>

					{ items && items.map((item, key) => {
						return <div key={key}>
							{item.title}
							<button type="button" onClick={() => this.increaseNumber(item)}>+</button>
							<input type="text" placeholder={addedCount[item.id].length}/>
							<button type="button" onClick={() => removeProduct(item.id)}>-</button>
							<span>{addedCount[item.id].length}</span>
							<button type="button" onClick={() => this.removeProductAll(item.id)}>Remove products</button>
						</div>
					})}
				</div>
			</React.Fragment>
		)
	}
}

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