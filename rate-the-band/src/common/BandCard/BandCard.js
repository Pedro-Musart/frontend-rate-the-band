import styled from 'styled-components';
import { Card } from '../../common-components/Card/Card';
import { ButtonLink } from '../../common-components/ButtonLink/ButtonLink';
import { Stars } from '../../common-components/Stars/Stars';
import { useBand } from '../../hooks/useBand';
import {
	BorderRadiuses,
	Colors,
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
	align-items: flex-end;
	justify-content: start;
	border-radius: ${BorderRadiuses.ONE};
	background-image: url('${(props) => props.src}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	transition: 200ms all ease;
	&:hover {
		transform: scale(1.1) translate(0, -6%) ;	
	}
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
	justify-content:space-evenly;
	width: 100%;
	margin-top: 10px;
`

const AlbunsImages = styled.div`
	width: 100%;	
	min-width: 63px;
	height: 63px;
	border-radius: 1.2rem;
	background-image: url('${(props) => props.src}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	`



export function BandCard({ name, bandImage, albumImage1, albumImage2,albumImage3, id }) {
	const { band, isLoading, getBandAvaliation } = useBand(id);

	return (

		<div className='d-flex justify-content-center mb-5'>
		<Section>
		<div>
		<Card>
						<ButtonLink to={`/details/${id}`}>
						<BandImage  src={bandImage}>
				<BandInfo>

				<BandName>{name}</BandName>
				<div className='w-75'>
			
				{getBandAvaliation(id) != null ? (
                        <Stars number={getBandAvaliation(id).avaliation}  />
                    ) : (
                        <Stars number={0}  />
                    )}
				</div>
				</BandInfo>
			</BandImage>
			</ButtonLink>


		</Card>
		</div>
		<AlbumContainer>
			<AlbunsImages  src={albumImage1}>
				
			</AlbunsImages>

			{albumImage2 && (
			<>
			<AlbunsImages className="ms-2" src={albumImage2}></AlbunsImages>	
			</>
			)}

			{albumImage3 && (
			<>
			<AlbunsImages className="ms-2" src={albumImage3}></AlbunsImages>	
			</>
			)}
		</AlbumContainer>
		</Section>
		</div>
	);
}
