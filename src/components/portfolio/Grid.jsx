import React from 'react';
import styled from 'styled-components';

import { Container } from '../generic/Container';

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Tile = styled.div`
  flex: 0 0 50%;
	background-image: url('${({ image }) => image && image}');
	background-size: cover;
	background-position: center;
	height: 600px;
`;

export const Portfolio = () => {
	return (
		<Container noPadding>
			<Wrapper>
				<Tile image="https://images.prismic.io/pixelate/9d8b226f-458c-44cf-b461-93a7523eab15_1+%281%29.jpg" />
				<Tile image="https://images.prismic.io/pixelate/459d88c4-b6c7-4fde-8418-f4d590f4cc24_rs3-willis.jpg" />
				<Tile image="https://images.prismic.io/pixelate/1348d670-a3cf-46cb-8a35-321d51fcdbda_1.jpg" />
				<Tile image="https://images.prismic.io/pixelate/9d8b226f-458c-44cf-b461-93a7523eab15_1+%281%29.jpg" />
				<Tile image="https://images.prismic.io/pixelate/459d88c4-b6c7-4fde-8418-f4d590f4cc24_rs3-willis.jpg" />
				<Tile image="https://images.prismic.io/pixelate/1348d670-a3cf-46cb-8a35-321d51fcdbda_1.jpg" />
			</Wrapper>
		</Container>
	)
};