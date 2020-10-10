import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare as FacebookLogo } from '@fortawesome/free-brands-svg-icons';
import { faInstagram as InstagramLogo } from '@fortawesome/free-brands-svg-icons';

import { Container } from './Container';

const Wrapper = styled.div`
	width: 100%;
	height: 85px;
	border-bottom: 2px solid #000;
	box-shadow: 5px 10px 18px #888888;
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	height: 85px;
`;

const Items = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${({ align }) => align ? align : 'left'};
	flex: 0 0 33.3333%;
`;

const Link = styled.a`
	font-size: 24px;
	margin-right: 40px;
	transition: all 0.2s;

	&:hover {
		cursor: pointer;
		color: #001ccf;
	}
`;

const IconLink = styled.a`
	margin-left: 40px;
	
	svg {
		height: 30px;
		width: 30px !important;
		transition: all 0.2s;

		&:hover {
			cursor: pointer;
			color: #001ccf;
		}
	}
`

const Logo = styled.img`
	width: 180px;
	height: 55px;
`;

export const Masthead = () =>
	<Wrapper>
		<Container>
			<Content>
				<Items>
					<Link>Portfolio</Link>
					<Link>Contact</Link>
				</Items>
				<Items align="center">
					<Logo src="https://images.prismic.io/pixelate/e3fc4045-33c4-4a51-97c2-9f50da991384_web-logo.png" />
				</Items>
				<Items align="flex-end">
					<IconLink><FontAwesomeIcon icon={FacebookLogo} /></IconLink>
					<IconLink><FontAwesomeIcon icon={InstagramLogo} /></IconLink>
				</Items>
			</Content>
		</Container>
	</Wrapper>