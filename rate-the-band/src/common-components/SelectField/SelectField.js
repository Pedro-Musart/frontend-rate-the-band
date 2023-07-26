import styled from 'styled-components';

import {
	BorderRadiuses,
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
	border-radius: 12px; 
	border-bottom: 1px solid ${Colors.NEUTRAL_WHITE};
	outline: none;
	width:100%;
	padding: ${Spaces.ONE} ${Spaces.EIGHT} ${Spaces.ONE} ${Spaces.ONE};
	color: ${Colors.NEUTRAL_BLACK};
	background: ${Colors.NEUTRAL_WHITE};
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