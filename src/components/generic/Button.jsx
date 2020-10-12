import React from 'react';
import styled from 'styled-components';

export const Button = ({ children, element }) => {
	const ButtonStyles = styled[element]`
		border: 3px solid #fff;
		background: none;
		font-size: 24px;
		padding: 10px;
		transition: all 0.2s;
	
		&:hover {
			background: #fff;
			color: #000;
			cursor: pointer;
		}
	`;

	return <ButtonStyles>{children}</ButtonStyles>
}
	