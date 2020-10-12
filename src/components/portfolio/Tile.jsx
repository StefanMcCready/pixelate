import React from 'react';
import styled from 'styled-components';

import { Button } from '../';

const Wrapper = styled.div`
  flex: 0 0 50%;
	background-image: url('${({ image }) => image && image}');
	background-size: cover;
	background-position: center;
	height: 600px;
`;

const Fade = styled.div`
	height: 600px;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	position: relative;
	dislay: flex;
	align-items: middle;
`;

const Content = styled.div`
	color: #fff;
	padding: 40px;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
`;

const Title = styled.h2`
	font-size: 36px;
	margin-bottom: 10px;
`;

const Description = styled.h3`
	font-size: 28px;
	margin-top: 0;
	margin-bottom: 35px;
`;

export const Tile = ({ title, description, image }) => (
	<Wrapper image={image}>
		<Fade>
			<Content>
				<Title>Hello there</Title>
				<Description>Whale hello there. This is another nice livery</Description>
				<Button element="a">View Livery</Button>
			</Content>
		</Fade>
	</Wrapper>
)