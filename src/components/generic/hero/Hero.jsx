import React from 'react';
import styled from 'styled-components';

import { Container, Button, Content as Prismic } from '../../';
import { selectHero } from './selector';

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

export const Hero = () => (
	<Prismic type="livery">
		{({ content }) => {
			if (!content) {
				return null;
			}

			const { heading, description, media } = selectHero(content);

			return (
				<Wrapper image={media}>
					<Fade>
						<Content>
							<Container>
								<Heading>{heading}</Heading>
								<Description>{description}</Description>
								<Button element="a">View Livery</Button>
							</Container>
						</Content>
					</Fade>
				</Wrapper>
			)
		}}
	</Prismic>
)