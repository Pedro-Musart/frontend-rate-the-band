import React from 'react';
import { Flex, Box } from 'reflexbox';
import { Button } from '../common-components/Button/Button';
import { SearchField } from '../common-components/SearchField/SearchField';
import { Spaces } from '../shared/DesignTokens';
import { BandCard } from '../common/BandCard/BandCard';
import styled from 'styled-components';
import { useAxios, configure } from 'axios-hooks';
import axios from 'axios';
import $ from 'jquery';

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

function searchBand(band) {
  const url = `http://api.deezer.com/search?q=artist:"${band}"&output=jsonp`;

  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'GET',
      url,
      dataType: 'jsonp',
      contentType: 'application/json; charset=utf-8',
      jsonpCallback: 'jsonCallback',
      cache: false,
      beforeSend: (xhr) => {
        // função antes de executar a chamada
      },
      success: (data) => {
        resolve(data);
      },
      error: (xhr, status, error) => {
        reject(error);
      }
    });
  });
}



	const [bands, setBands] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(false);

	React.useEffect(() => {
		searchBand('Pink Floyd').then((bands) => {
			setBands(bands.data);
			console.log(bands)
			setIsLoading(true);
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
		

		{isLoading && bands.map((band)=> (
		 <BandCard
				key={band.artist.name}
				id={band.artist.name}
				genre={band.artist.name}
				name={band.artist.name}
				image={band['artist']['picture_medium']}
				country={band.artist.name}
			/>
	
		))}
		

	

		</BandGrid>

		</main>
		</>
	);
}

