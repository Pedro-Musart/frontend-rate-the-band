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
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
const InformationGrid = styled(Box)`
	display: grid;
	grid-template-columns: 1fr 70px;
	gap: ${Spaces.TWO};
`;
const BandAvatarSkeleton = styled(Skeleton)`
    width: 100%;
    height: 70px;
    border-radius: ${BorderRadiuses.ONE};
`;



export function BandCardLoader() {
	return (
		<Card>
			<InformationGrid p={Spaces.TWO} mb={Spaces.ONE_HALF}>
				<Box>
					<Box mb={Spaces.ONE}>
                        <Skeleton/>
					</Box>
					<Description as="div" color={Colors.GRAY_700}>
						<Skeleton/>
					</Description>
					<Description as="div" color={Colors.GRAY_700}>
						 <Skeleton/>
					</Description>
	
				</Box>
                <BandAvatarSkeleton/>
				
			</InformationGrid>
			<Box width="87px" py={Spaces.ONE} px={Spaces.TWO}>
				<Skeleton/>
			</Box>
		</Card>
	);
}