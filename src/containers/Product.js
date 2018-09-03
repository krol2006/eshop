import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as productActions from '../actions/products';
import * as cartActions from '../actions/cart';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import find from 'lodash/find';

class Product extends Component {
	componentWillMount(){
		const { setCurrentProduct } = this.props;

		axios.get('/books.json')
			.then(({ data }) => {
				setCurrentProduct(find(data, { id: Number(this.props.match.params.id) }))
			});

		this.add = this.add.bind(this);
		this.goBack = this.goBack.bind(this);
	}

	add(product) {
		const { addProduct } = this.props;
		addProduct(product);
	};

	goBack() {
		this.props.history.goBack();
	}

	render(){
		const { currentProduct } = this.props.products;

		return (
			<div>
				<div>
					<button type="button" onClick={() => this.goBack()}>Back</button>
				</div>

				{currentProduct.title}
				<p>Author: {currentProduct.author}</p>
				<img src={currentProduct.image} alt={currentProduct.title} />
				<button type="button" onClick={() => this.add(currentProduct)}>Добавить в корзину</button>
			</div>
		)
	}
}

const mapStateToProps = ({ products }) => ({
	products: products
});

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(productActions, dispatch),
	...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);