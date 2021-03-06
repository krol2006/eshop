import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductsWrapper = styled.div`
		flex: 0 1 900px;
		max-width: 900px;
`;

const ProductsTitle = styled.div`
	text-align: center;
	font-size: 24px;
	margin: 20px 0;
`;

const ProductsList = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const ProductsItem = styled.div`
	flex: 0 1 33.33%;
	margin-bottom: 30px;
	width: calc(100% / 3);
	max-width: 250px;
`;

const ProductsItemLayout = styled.div`
	display: flex;
	flex-direction: column;
`;

const ProductsItemTitle = styled.div`
	min-height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	margin-bottom: 10px;
`;

const ProductsItemDescription = styled.div`
	min-height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
`;

const ProductsItemTitleLink = styled(Link)`
	text-decoration: none;
	font-weight: bold;
	color: black;
	
	&:hover {
		text-decoration: underline;
	}
`;

const ProductsItemImage = styled.div`
	display: flex;
	justify-content: center;
	height: 300px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	overflow: hidden;
	background: #f8f8f8;
	box-sizing: border-box;
	padding: 10px 0;
	
	img {
	object-fit: cover;
		width: auto;
		max-width: 100%;
		max-height: 100%;
	}
`;

const ProductsItemOptions = styled.div`
	background: #fdf988;
	min-height: 60px;
	box-sizing: border-box;
	padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const ProductsItemPrice = styled.p`
	color: red;
	font-size: 21px;
	font-weight: bold;
`;

const ProductsItemAdd = styled.button`
	color: #222;
	cursor: pointer;
`;

class Products extends Component {
	constructor(){
		super();

		this.state = {
			currentPage: 1,
			itemsPerPage: 6
		};
	};

	componentDidMount(){
		const { setProducts } = this.props;

		axios.get('/data/products.json')
			.then(({ data }) => {
				setProducts(data);
			});
	}

	handlePages = event => {
		this.setState({
			currentPage: Number(event.target.id)
		})
	};

	add = product => {
		const { addProduct } = this.props;
		addProduct(product);
	};

	render() {
		const { currentPage, itemsPerPage } = this.state;
		const { products, isReady } = this.props;
		const indexOfLastItem = currentPage * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
		const pageNumbers = [];

		for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
			pageNumbers.push(i);
		}

		return (
			<ProductsWrapper>
				<ProductsTitle>
					<p>Products</p>
				</ProductsTitle>

				<ProductsList>
					{ !isReady
						? 'Loading...'
						: currentProducts.map((product, key) => {
							return (
								<ProductsItem key={key}>
									<ProductsItemLayout>
										<ProductsItemTitle>
											<ProductsItemTitleLink to={`product/${product.id}`}>{product.name}</ProductsItemTitleLink>
										</ProductsItemTitle>

										<ProductsItemDescription>
											<p>{product.description.slice(0, 100).length < product.description.length ? product.description.slice(0, 100) + '...' : ''}</p>
										</ProductsItemDescription>

										<ProductsItemImage>
											<img src={`/images/products/${product.image}`} alt={product.name} />
										</ProductsItemImage>

										<ProductsItemOptions>
											<ProductsItemPrice>{product.price}</ProductsItemPrice>
											<ProductsItemAdd type="button" onClick={() => this.add(product)}>В корзину</ProductsItemAdd>
										</ProductsItemOptions>
									</ProductsItemLayout>
								</ProductsItem>
							)
						})}
				</ProductsList>

				<div className="pager">
					{ pageNumbers.map(number => {
						return (
							<li
								key={number}
								id={number}
								onClick={this.handlePages}
							>{number}</li>
						)
					})}
				</div>
			</ProductsWrapper>
		)
	}
}

export default Products;