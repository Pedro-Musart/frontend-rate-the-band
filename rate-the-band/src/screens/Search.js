import { Flex, Box } from 'reflexbox';
import { Button } from '../common-components/Button/Button';
import { SearchField } from '../common-components/SearchField/SearchField';
import { Spaces } from '../shared/DesignTokens';
import { BandCard } from '../common/BandCard/BandCard';
import styled from 'styled-components';

const BandGrid = styled(Box)`
	display: grid;
	grid-template-columns: 1fr;
	gap: ${Spaces.ONE_HALF};
	@media (min-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: ${Spaces.TWO};
		
	}
`;

export function Search() {
	return (
		<>
		<main className="container-xl">

		<Flex 
			width={['100%', '600px']}
			mx={[Spaces.NONE, 'auto']}
			mt={[Spaces.THREE, Spaces.FIVE]}
			px={[Spaces.One, Spaces.NONE]}
			 
		>
			<Box flexGrow="1">
				<SearchField placeholder="Digite um nome de banda"/>
			</Box>
			<Box  ml={Spaces.TWO}>
				<Button>Buscar</Button>
			</Box>


		</Flex>
		
		<BandGrid 
			my={Spaces.FIVE}
		>

 			<BandCard
				genre="Rock Progressivo"
				name="Pink Floyd"
				image="https://mcdn.wallpapersafari.com/medium/42/62/P5oUFc.png"
				country="Reino Unido"
			/>

			<BandCard
				genre="Rock Progressivo"
				name="Pink Floyd"
				image="https://mcdn.wallpapersafari.com/medium/42/62/P5oUFc.png"
				country="Reino Unido"
			/>

	 			<BandCard
				genre="Rock Progressivo"
				name="Pink Floyd"
				image="https://mcdn.wallpapersafari.com/medium/42/62/P5oUFc.png"
				country="Reino Unido"
			/>

		</BandGrid>

		<Box >
		
		</Box>

		</main>
	


		</>
	);
}

