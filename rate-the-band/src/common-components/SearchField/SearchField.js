
import { Button } from "../Button/Button";
import styled from 'styled-components';
import {
	BorderRadiuses,
	Colors,
	FontFamilies,
	FontLetterSpacings,
	FontSizes,
	Spaces,
} from '../../shared/DesignTokens';

import searchIcon from '../../assets/icons/search.svg';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	grid-template-columns: 16px 1fr;
	gap: ${Spaces.TWO};
	padding: ${Spaces.NONE} ${Spaces.NONE} ${Spaces.NONE} ${Spaces.TWO};
	background: white;
	border-radius: ${BorderRadiuses.ONE};
	
`;


const Icon = styled.img.attrs({
	src: searchIcon,
})`
	width: 23px;
	height: 23px;
`;
const Input = styled.input`
	font-size: ${FontSizes.BASE};
	font-family: ${FontFamilies.PRIMARY};
	border: none;
	outline: none;
	padding-start: ${Spaces.TWO};
	border-radius: ${BorderRadiuses.ONE};
	width: 40vw;
	background: none;
	&::placeholder {
		color: ${Colors.NEUTRAL_BLACK};
		opacity: 1;
	}

`;

export function SearchField(name ,click) {
	return (
		<Wrapper>
			<div>
			<Input {...name} type="text" ></Input>
			</div>

		</Wrapper>
	);
}