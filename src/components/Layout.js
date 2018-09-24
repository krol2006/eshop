import styled, { css } from 'styled-components';

export const sizes = {
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

export const Helper = styled.div`
	background: #131313;
`;

export const Wrapper = styled.div`
	max-width: 1400px;
	margin: 0 auto;
`;

export const Container = styled.div`
	height: 100%;
	max-width: 1140px;
	margin: 0 auto;
	padding: 0 15px;
`;