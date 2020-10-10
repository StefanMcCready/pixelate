import React from 'react';
import styled from 'styled-components';

import { Container } from './Container';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 85px);
  background-image: url('${({ image }) => image && image}');
  background-size: cover;
  background-position: center;
`;

const Fade = styled.div`
	height: calc(100vh - 85px);
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	position: relative;
`;

const Content = styled.div`
	color: #fff;
	position: absolute;
	bottom: 60px;
	width: 100%;
`;

const Heading = styled.h2`
	font-size: 72px;
	margin-bottom: 10px;
`;

const Description = styled.h3`
	font-size: 26px;
	margin-top: 0;
	margin-bottom: 35px;
`

const Button = styled.a`
	border: 3px solid #fff;
	background: none;
	font-size: 26px;
	padding: 10px;
	transition: all 0.2s;

	&:hover {
		background: #fff;
		color: #000;
		cursor: pointer;
	}
`

export const Hero = ({ image }) => (
	<Wrapper image={image}>
		<Fade>
			<Content>
				<Container>
					<Heading>Brewdog - Xfinity Mustang 2019</Heading>
					<Description>Checkout our new finctional livery featuring Brewdog branding. The colours have been inspired by the ever popular Elvis Juice Beer.</Description>
					<Button>View Livery</Button>
				</Container>
			</Content>
		</Fade>
	</Wrapper>
)