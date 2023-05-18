import styled from 'styled-components';


import {
	Colors,
	Spaces,
	FontLetterSpacings,
	FontFamilies,
	FontWeights,
	FontSizes,
} from '../../shared/DesignTokens';

export const Link = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: none;
	outline: none;
	background: none;
	width: 100%;
	font-weight: ${FontWeights.BOLD};
	font-family: ${FontFamilies.PRIMARY};
	color: ${Colors.NEUTRAL_WHITE};
	padding: ${Spaces.ONE} ${Spaces.TWO};
	cursor: pointer;
	transition: 200ms all ease;
	letter-spacing: ${FontLetterSpacings.MEDIUM};
	text-decoration: none;
	font-size: ${FontSizes.BASE};
	&:hover {
		color: ${Colors.NEUTRAL_PURPLE};
	}
`;