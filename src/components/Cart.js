import React from 'react';

const Cart = props => {
	const increaseNumber = item => {
		const { addProduct } = props;
		addProduct(item);
	};

	const decreaseNumber = id => {
		const { removeProduct } = props;
		removeProduct(id);
	};

	const removeProductAll = id => {
		const { removeProductAll } = props;
		removeProductAll(id);
	};

	const { totalPrice, count, items, addedCount } = props;

	return (
		<React.Fragment>
			<div>Total price: {totalPrice.toFixed(2)}</div>
			<div>Total products: {count}</div>

			<div>
				<p>Products in cart</p>

				{ items && items.map((item, key) => {
					return <div key={key}>
						{item.title}
						<button type="button" onClick={() => increaseNumber(item)}>+</button>
						<input type="text" placeholder={addedCount[item.id].length} />
						<button type="button" onClick={() => decreaseNumber(item.id)}>-</button>
						<span>{addedCount[item.id].length}</span>
						<button type="button" onClick={() => removeProductAll(item.id)}>Remove products</button>
					</div>
				})}
			</div>
		</React.Fragment>
	)

};

export default Cart;