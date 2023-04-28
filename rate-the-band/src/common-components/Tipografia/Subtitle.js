import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontLineHeights,
	FontSizes,
	FontWeights,
} from '../../shared/DesignTokens';
export const Subtitle = styled.span`
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.REGULAR};
	line-height: ${FontLineHeights.MEDIUM};
	font-size: ${FontSizes.TWO};
	color: ${(props) => props.color};
	margin: 0;
	padding: 0;
`;

Subtitle.defaultProps = {
    color: Colors.GRAY_700,
};