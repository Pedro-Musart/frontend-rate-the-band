import React from 'react';
import { Flex, Box } from 'reflexbox';
import { Button } from '../common-components/Button/Button';
import { SearchField } from '../common-components/SearchField/SearchField';
import { Spaces } from '../shared/DesignTokens';
import { BandCard } from '../common/BandCard/BandCard';
import styled from 'styled-components';
import { useAxios, configure } from 'axios-hooks';
import axios from 'axios';

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

				<div>
					{process.env.REACT_APP_LAST_FM_API_BASE_URL} /{' '}
					{process.env.REACT_APP_LAST_FM_API_KEY}
					<p>aa</p>
				</div>
async function searchBand(band) {
  const { data } = await axios.get('http://ws.audioscrobbler.com/2.0/', {
    params: {
      method: 'artist.search',
      artist: band,
      api_key: process.env.REACT_APP_LAST_FM_API_KEY,
      format: 'json',
    },
    headers: {
      'User-Agent': 'rate-the-band/1.0.0',
    },
  });

  return data.results || [];
}

	const [bands, setBands] = React.useState([]);
	
	React.useEffect(() => {
		searchBand('Pink Floyd').then((bands) => {
			console.log(bands);
		});
	}, []);



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
		
		<BandGrid my={Spaces.FIVE}>

		{bands.map((band) => (
			<BandCard
				key={band.id}
				id={band.id}
				genre={band.genre}
				name={band.name}
				image={band.image}
				country={band.country}
			/>

		))}

		</BandGrid>

		</main>
		</>
	);
}

