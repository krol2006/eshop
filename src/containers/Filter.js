import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from "../actions/filter";
import styled from 'styled-components';

const FilterWrapper = styled.div`

`;

const FilterList = styled.ul`
	display: flex;
	flex-direction: column;
`;

const FilterItem = styled.li`
	height: 30px;
	position: relative;
`;

const FilterInputLabel = styled.label`
	height: 100%;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	padding: 0 10px;
`;

const FilterInput = styled.input`
	-moz-appearance: none;
	-webkit-appearance: none;
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	cursor: pointer;
	
	&:focus {
		outline: none;
	}
	
	&:checked + ${FilterInputLabel} {
		background: rgba(0,0,0,.05);
	}
`;

const FilterSearchWrapper = styled.div`

`;

const FilterSearchInput = styled.input`

`;

const Filter = (props) => {
	const { filterBy, setFilter, setSearch, searchBy } = props;

	const handleChange = event => {
		setFilter(event.target.value);
	};

	const handleSearch = event => {
		setSearch(event.target.value);
	};

	return (
			<FilterWrapper>
				<FilterList>
					<FilterItem>
						<FilterInput type="radio" name="filter" value='all' onChange={handleChange} checked={ filterBy === 'all' ? 'checked' : false } />
						<FilterInputLabel>Все</FilterInputLabel>
					</FilterItem>
					<FilterItem>
						<FilterInput type="radio" name="filter" value="popular" onChange={handleChange} checked={ filterBy === 'popular' ? 'checked' : false } />
						<FilterInputLabel>Популярные</FilterInputLabel>
					</FilterItem>
					<FilterItem>
						<FilterInput type="radio" name="filter" value="cheap" onChange={handleChange} checked={ filterBy === 'cheap' ? 'checked' : false } />
						<FilterInputLabel>Дорогие</FilterInputLabel>
					</FilterItem>
					<FilterItem>
						<FilterInput type="radio" name="filter" value="expensive" onChange={handleChange} checked={ filterBy === 'expensive' ? 'checked' : false } />
						<FilterInputLabel>Дешёвые</FilterInputLabel>
					</FilterItem>
					<FilterItem>
						<FilterInput type="radio" name="filter" value="author" onChange={handleChange} checked={ filterBy === 'author' ? 'checked' : false } />
						<FilterInputLabel>Автор</FilterInputLabel>
					</FilterItem>
				</FilterList>
				<FilterSearchWrapper>
					<FilterSearchInput type="search" value={searchBy} onChange={handleSearch} />
				</FilterSearchWrapper>
			</FilterWrapper>
	)
};

const mapStateToProps = ({ filter }) => ({
	filterBy: filter.filterBy
});

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(filterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);