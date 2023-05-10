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
} from '../../shared/DesignTokens';
const InformationGrid = styled(Box)`
	display: grid;
	grid-template-columns: 1fr 70px;
	gap: ${Spaces.TWO};
`;
const BandAvatar = styled.div`
	width: 100%;
	height: 70px;
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.ONE};
	background-image: url('${(props) => props.src}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;
export function BandCard({ name, musics, image, id }) {
	return (
		<Card>
			<InformationGrid p={Spaces.TWO} mb={Spaces.ONE_HALF}>
				<Box>
					<Box mb={Spaces.ONE}>
						<HeadingTwo>{name}</HeadingTwo>
					</Box>
					<Description as="div" color={Colors.GRAY_700}>
						<strong>Nota atual:</strong> 5
					</Description>
					<Description as="div" color={Colors.GRAY_700}>
						 {musics}
					</Description>
	
				</Box>
				<BandAvatar src={image} />
			</InformationGrid>
			<Box width="87px">
				<ButtonLink to={`/detalhes/${id}`}>Ver Mais</ButtonLink>
			</Box>
		</Card>
	);
}