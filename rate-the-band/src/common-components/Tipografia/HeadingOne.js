import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontLineHeights,
	FontSizes,
	FontWeights,
} from '../../shared/DesignTokens';
export const HeadingOne = styled.h1`
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	line-height: ${FontLineHeights.MEDIUM};
	font-size: ${FontSizes.FOUR};
	color: ${(props) => props.color};
	margin: 0;
	padding: 0;
`;
HeadingOne.defaultProps = {
	color: Colors.NEUTRAL_BLACK,
};