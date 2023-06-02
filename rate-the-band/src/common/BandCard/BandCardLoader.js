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
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


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
	border: 1px solid #3b3b3b ;
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


const AlbumContainer = styled.div`
	display: flex;
	width: 100%;
	height: 63px;
	margin-top: 10px;
`

const AlbunsImages = styled.div`
	flex: 1 ;
	
	margin-right: 10px;
	border-radius: 1.2rem;
	`


export function BandCardLoader({ name, bandImage, albumImage1, albumImage2,verMais, id }) {
	return (
		<div className='d-flex justify-content-center mb-5'>
		<Section>
		<div>
		<Card>
			<BandImage >
				<Skeleton/>
				<BandInfo>

				<Skeleton/>

				</BandInfo>
			</BandImage>
		</Card>
		</div>
		<AlbumContainer>
			<AlbunsImages  >
				<Skeleton/>
			</AlbunsImages>

			<AlbunsImages  >
				<Skeleton/>
			</AlbunsImages>
	
			<AlbunsImages className='m-0'  >
				<Skeleton/>
			</AlbunsImages>
			
		
			

		</AlbumContainer>
		</Section>
		</div>
	);
}
