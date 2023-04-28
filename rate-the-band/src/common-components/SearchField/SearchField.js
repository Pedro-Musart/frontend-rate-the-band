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
	display: grid;
	align-items: center;
	grid-template-columns: 16px 1fr;
	gap: ${Spaces.TWO};
	padding: ${Spaces.NONE} ${Spaces.TWO};
	background-color: ${Colors.GRAY_200};
	border-radius: ${BorderRadiuses.ONE};
	height: 40px;
`;
const Icon = styled.img.attrs({
	src: searchIcon,
})`
	width: 16px;
	height: 16px;
`;
const Input = styled.input`
	font-size: ${FontSizes.TWO};
	font-family: ${FontFamilies.PRIMARY};
	border: none;
	outline: none;
	padding: ${Spaces.ONE};
	color: ${Colors.GRAY_600};
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

export function SearchField(props) {
	return (
		<Wrapper>
			<Icon />
			<Input {...props} type="text" />
		</Wrapper>
	);
}