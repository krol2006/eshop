import React, { Component } from 'react';
import Products from './containers/Products';
import Product from './containers/Product';
import { Switch, Route } from 'react-router-dom';
import Cart from './containers/Cart';
import './App.css';
import styled from 'styled-components';
import { media } from './components/Layout';
import { Helper, Wrapper } from "./components/Layout";
import Header from './components/Header';
import Filter from './containers/Filter';

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

const Content = styled.div`

`;

const Footer = styled.div`
	background: darkred;
`;

class App extends Component {
  render() {
		return (
			<Helper>
				<Wrapper>
					<Header />

					<Content>
						<Layout>
							<LayoutColumnWide>
								<Switch>
									<Route exact path='/' component={Products} />
									<Route path='/product/:id' component={Product} />
								</Switch>
							</LayoutColumnWide>

							<LayoutColumnNarrow>
								<Cart />
								<Filter/>
							</LayoutColumnNarrow>
						</Layout>
					</Content>

					<Footer>Footer</Footer>
				</Wrapper>
			</Helper>
    );
  }
}

export default App;
