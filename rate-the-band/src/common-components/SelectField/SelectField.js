import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontLetterSpacings,
	FontSizes,
	Spaces,
} from '../../shared/DesignTokens';
export const SelectField = styled.select`
	font-size: ${FontSizes.TWO};
	font-family: ${FontFamilies.PRIMARY};
	border: none;
	border-bottom: 1px solid ${Colors.GRAY_200};
	outline: none;
	padding: ${Spaces.ONE} ${Spaces.EIGHT} ${Spaces.ONE} ${Spaces.ONE};
	color: ${Colors.NEUTRAL_BLACK};
	background: none;
	letter-spacing: ${FontLetterSpacings.MEDIUM};
	&::placeholder {
		color: ${Colors.GRAY_400};
		opacity: 1;
	}
	&:-ms-input-placeholder {
		color: ${Colors.GRAY_400};
	}
	&::-ms-input-placeholder {
		color: ${Colors.GRAY_400};
	}
`;

export const Option = styled.option``;