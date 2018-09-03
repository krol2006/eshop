import React, { Component } from 'react';
import Products from './containers/Products';
import Product from './containers/Product';
import { Switch, Route } from 'react-router-dom';
import Cart from './containers/Cart';
import './App.css';
import styled, { css } from 'styled-components';

const sizes = {
	desktop: 992,
	tablet: 768,
	phone: 576
};

export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

	return acc
}, {});

const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  
  ${media.desktop`
    background: red;
  `}
`;

const LayoutColumnWide = styled.div`
	flex: 0 1 900px;
`;

const LayoutColumnNarrow = styled.div`
	flex: 0 1 300px;
`;

const Header = styled.div`
	margin-bottom: 20px;
`;

class App extends Component {
  render() {
		return (
      <Container>
				<Header>
					<Layout>

					</Layout>
				</Header>

				<Layout>
					<LayoutColumnWide>
						<Switch>
							<Route exact path='/' component={Products} />
							<Route path='/product/:id' component={Product} />
						</Switch>
					</LayoutColumnWide>

					<LayoutColumnNarrow>
						<Cart />
					</LayoutColumnNarrow>
				</Layout>

				<div>Footer</div>
      </Container>
    );
  }
}

export default App;
