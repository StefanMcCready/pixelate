import React from 'react';
import styled from 'styled-components';

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
	width: 100%;
`;

export const Tile = ({ image, title }) => (
	<Wrapper image={image}>
		<Fade>
			<Content>
				Hello there
			</Content>
		</Fade>
	</Wrapper>
)