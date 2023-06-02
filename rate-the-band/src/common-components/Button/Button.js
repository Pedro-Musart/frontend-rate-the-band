
import styled from 'styled-components';
import {
	BorderRadiuses,
	Colors,
	Shadows,
	Spaces,
	FontLetterSpacings,
	FontFamilies,
	FontWeights,
} from '../../shared/DesignTokens';

import { FontSizes } from '../../shared/DesignTokens';

export const Button = styled.button`
	border: none;
	outline: none;
	width: 100%;
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	background-color: ${Colors.NEUTRAL_PURPLE};
	color: ${Colors.NEUTRAL_WHITE};
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.ONE};
	padding: ${Spaces.TWO} ${Spaces.FOUR};
	cursor: pointer;
	transition: 200ms all ease;	
    letter-spacing: ${FontLetterSpacings.MEDIUM};
	font-size: ${FontSizes.BASE};
	display: flex;
	justify-content: center;
 	align-items: center;
	&:hover {
		background-color: ${Colors.NEUTRAL_PURPLE1};
	}
`;