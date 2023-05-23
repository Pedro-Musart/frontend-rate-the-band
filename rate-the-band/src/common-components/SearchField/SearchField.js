
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
	
	background: none;
	&::placeholder {
		color: ${Colors.NEUTRAL_BLACK};
		opacity: 1;
	}

`;

export function SearchField(props) {
	return (
		<Wrapper>
			<div>
			<Input {...props} type="text" ></Input>
			</div>
			<div >
			<Button  {...props} >
               <Icon className="me-4"/> 
               Buscar
            </Button>
			</div>
		</Wrapper>
	);
}