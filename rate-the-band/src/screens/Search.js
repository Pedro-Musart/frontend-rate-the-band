import React from 'react';
import { Flex, Box } from 'reflexbox';
import { Button } from '../common-components/Button/Button';
import { SearchField } from '../common-components/SearchField/SearchField';
import { Spaces } from '../shared/DesignTokens';
import { BandCard } from '../common/BandCard/BandCard';
import styled from 'styled-components';
import { useAxios, configure } from 'axios-hooks';
import axios from 'axios';
import $, { map } from 'jquery';

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
  const url = `http://api.deezer.com/search?q="${band}"&output=jsonp`;

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
		searchBand('c').then((bands) => {
			
			newBand(bands.data);
			
			setBands(newBand(bands.data))
			


			setIsLoading(true);
		});
	}, []);
	
	console.log(bands);

	//a API do deezer retorna varios albuns com diversos artistas repetidos, essa função retorna um map organizado com as informações de cada artista/banda e todos os albuns relacionados a ele
	function newBand(bandas) {

		let bandaUnica = new Map();
		const bandArray = bandas.filter((valorAtual) =>{
			
			//esse trecho cria um array apenas com os albuns correspondentes ao id do artista do valorAtual
			let bandAlbums = []
			const albunsFilter = bandas.filter ((albumAtual) =>{
				if (albumAtual.artist.id === valorAtual.artist.id) {
					bandAlbums.push(albumAtual.album)
			}});

			let bandMusics = []
			const musicsFilter = bandas.filter ((musicaAtual) =>{
				if (musicaAtual.artist.id === valorAtual.artist.id) {
					bandMusics.push(musicaAtual.title)
			}});

			// esse trecho confere se o valor já foi inserido antes na 'bandaUnica' e se não tiver, ele retorna o map da banda com os albuns de cada artista
			if (!bandaUnica.has(valorAtual.artist.id)) {
				      const bandObject = {
						artist: valorAtual.artist,
						albuns: bandAlbums,
						musics: bandMusics
      }
				bandaUnica.set(valorAtual.artist.id, bandObject)
			}
		})

		
		return ([...bandaUnica.values()])

	}





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
				key={band.artist.id}
				name={band.artist.name}
				image={band['artist']['picture_medium']}
				musics={band.musics[0]}
			/>
	
		))}
		

	

		</BandGrid>

		</main>
		</>
	);
}

