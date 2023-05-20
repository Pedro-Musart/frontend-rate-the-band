import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontSizes,
	FontWeights,
} from '../../shared/DesignTokens';
export const HeadingOne = styled.h1`
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	font-size: ${FontSizes.H1};
	color: ${Colors.NEUTRAL_WHITE};
	margin: 0;
	padding: 0;

	@media (max-width: 990px) {
    font-size: ${FontSizes.H3};
    }
	
	@media (max-width: 375px) {
    font-size: ${FontSizes.H4};
    }

`;
