import styled from 'styled-components';

export const Container = styled.div`
	padding: ${({ noPadding }) => noPadding ? '0' : '0 40px'};
	max-width: 3440px;
	margin: 0 auto;
	position: relative;
`