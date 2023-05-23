import styled from 'styled-components';
import { Box } from 'reflexbox';
import { Card } from '../../common-components/Card/Card';
import { Caption } from '../../common-components/Tipografia/Caption';
import { Description } from '../../common-components/Tipografia/Description';
import { HeadingTwo } from '../../common-components/Tipografia/HeadingTwo';
import { ButtonLink } from '../../common-components/ButtonLink/ButtonLink';
import {
	BorderRadiuses,
	Colors,
	Shadows,
	Spaces,
	FontSizes,
	FontFamilies,
	FontWeights,
} from '../../shared/DesignTokens';

const Section = styled.section`
display: flex;
flex-direction: column;
width: 207px;
	@media (max-width: 700px) {
	width: 158px;

`

const BandImage = styled.div`
	width: 207px;
	height: 207px;
	display:flex;
	align-items: end;
	justify-content: left;
	border-radius: ${BorderRadiuses.ONE};
	background-image: url('${(props) => props.src}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	@media (max-width: 700px) {
	width: 158px;
	height: 158px;
`;

const BandInfo= styled.div`
 display: flex;
 flex-direction: column;
 justify-content: between;
 align-items: left;
 width: 100%;
 padding: 15px;
 background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.27) 33.33%, rgba(0, 0, 0, 0.55) 62.5%, #000000 95.83%);
 border-radius: 0px 0px 20px 20px;
`
const BandName = styled.h5`
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	font-size: ${FontSizes.H5};
	color: ${Colors.NEUTRAL_WHITE};
	margin: 0;
	padding: 0;

	@media (max-width: 700px) {
	font-weight: ${FontWeights.REGULAR};
`

const AlbumContainer = styled.div`
	display: flex;
	width: 100%;
	margin-top: 10px;
`

const AlbunsImages = styled.div`
	flex: 1 ;
	margin-right: 10px;
	border-radius: 1.2rem;
	background-image: url('${(props) => props.src}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	`

const MoreInfo = styled.div`
	flex: 1 ;
	height: 63px;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 700px) {
	height: 46px;
`

const Button = styled.button`
	border: none;
	outline: none;
	width:100%;
	height: 100%;
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	background-color: ${Colors.NEUTRAL_PURPLE};
	color: ${Colors.NEUTRAL_WHITE};
	box-shadow: ${Shadows.ONE};
	border-radius: 1.2rem;
	cursor: pointer;
	transition: 200ms all ease;	
	font-size: ${FontSizes.BASE};
	display: flex;
	justify-content: center;
 	align-items: center;
	&:hover {
		background-color: ${Colors.NEUTRAL_PURPLE1};
	}
`

export function BandCard({ name, bandImage, albumImage1, albumImage2,verMais, id }) {
	return (
		<div className='d-flex justify-content-center mb-5'>
		<Section>
		<div>
		<Card>
			<BandImage  src={bandImage}>
				<BandInfo>

				<BandName>{name}</BandName>

				</BandInfo>
			</BandImage>
		</Card>
		</div>
		<AlbumContainer>
			<AlbunsImages  src={albumImage1}>
				
			</AlbunsImages>

			{albumImage2 && (
			<>
			<AlbunsImages src={albumImage2}></AlbunsImages>	
			</>
			)}
			
			<MoreInfo >
			
	
			<Button>
			{verMais}+
			</Button>
		
			</MoreInfo>
		</AlbumContainer>
		</Section>
		</div>
	);
}
