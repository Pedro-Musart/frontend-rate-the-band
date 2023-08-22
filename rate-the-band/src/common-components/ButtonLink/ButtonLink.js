import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
	BorderRadiuses,
	Colors,
	Spaces,
	FontLetterSpacings,
	FontFamilies,
	FontWeights,
} from '../../shared/DesignTokens';

import { FontSizes } from '../../shared/DesignTokens';

export const ButtonLink = styled(Link)`
	border: none;
	outline: none;
	width: 100%;
	text-decoration: none;
	cursor: pointer;

`;