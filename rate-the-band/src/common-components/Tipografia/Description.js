import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontLineHeights,
	FontSizes,
	FontWeights,
} from '../../shared/DesignTokens';
export const Description = styled.span`
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.REGULAR};
	line-height: ${FontLineHeights.SMALL};
	font-size: ${FontSizes.ONE_QUARTER};
	color: ${(props) => props.color};
	margin: 0;
	padding: 0;
    strong {
		font-weight: ${FontWeights.BOLD};
	}
`;
Description.defaultProps = {
	color: Colors.NEUTRAL_BLACK,
};