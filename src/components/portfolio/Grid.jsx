import React from 'react';
import styled from 'styled-components';

import { Container } from '../generic/Container';
import { Tile } from './Tile';
import { selectPortfolio } from './selector';
import { Content } from '../generic/Content';

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const Portfolio = () => (
	<Content type="livery">
		{({ content }) => {
			if (!content) {
				return null;
			}

			const liveries = selectPortfolio(content);

			return (
				<Container noPadding>
					<Wrapper>
						{liveries.map(livery => <Tile {...livery} />)}
					</Wrapper>
				</Container>
			)
		}}
	</Content>
)