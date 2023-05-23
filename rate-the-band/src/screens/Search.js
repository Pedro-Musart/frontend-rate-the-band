import React from 'react';
import { Flex, Box } from 'reflexbox';
import { SearchField } from '../common-components/SearchField/SearchField';
import { Spaces } from '../shared/DesignTokens';
import { BandCard } from '../common/BandCard/BandCard';
import { BandCardLoader } from '../common/BandCard/BandCardLoader';
import styled from 'styled-components';
import $, { map } from 'jquery';
import {HeadingThree} from '../common-components/Tipografia/HeadingThree';
import {InfoApresentation} from '../common/InfoApresentation/InfoApresentation';

const BandGrid = styled(Box)`

	
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

		gap: ${Spaces.ONE_HALF};
	@media (max-width: 1200px) {
		grid-template-columns: 1fr 1fr 1fr 1fr ;
		
		
	}

	gap: ${Spaces.ONE_HALF};
	@media (max-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr ;
		
		
	}

	gap: ${Spaces.ONE_HALF};
	@media (max-width: 550px) {
		grid-template-columns: 1fr 1fr;
		gap: ${Spaces.TWO};
		
	}

		gap: ${Spaces.ONE_HALF};
	@media (max-width: 400px) {
		grid-template-columns: 1fr;
		gap: ${Spaces.TWO};
		
	}
`;

const MarginBottom = styled.div`
	margin-bottom: 120px;
`

const MarginY = styled.div`
	margin: 60px 0px 60px 0px;
`


export function Search() {

function searchBand(band) {
  const url = `http://api.deezer.com/search?q=artist:"${band}"&output=jsonp`;
	setIsLoading(true);
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
	const [search, setSearch] = React.useState({
		value: null,
		doSearch: false,
	});
	const [isLoading, setIsLoading] = React.useState(true);

	function handleUpdateSearchValue({target: {value} }){
		setSearch((prevValue) => ({... prevValue, value}))
	}

	function handleSearch() {
		setSearch((prevValue) => ({ ...prevValue, doSearch: true }));
	}

	React.useEffect(() => {
		if (search.doSearch) {
			searchBand(search.value).then((bands) => {
				// if (bands.data = []) {

				// }
			setBands(newBand(bands.data));
			console.log(newBand(bands.data))
			setSearch((prevValue) => ({ ...prevValue, doSearch: false}));
			
			setIsLoading(false)
		});
	}
	},[search]);

	React.useEffect(() => {
		searchBand('rock').then((bands) => {

			setBands(newBand(bands.data))
			console.log(newBand(bands.data))
			setIsLoading(false);
		});
	}, []);


	

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

		<MarginBottom>
		<InfoApresentation ></InfoApresentation>
		</MarginBottom>
			

				<HeadingThree className='mb-4'>Campo de Busca</HeadingThree>
				<SearchField
				placeholder="Digite uma banda"
				onKeyUp={handleUpdateSearchValue}
				onClick={handleSearch}
				/>
		

		<MarginY>
		<BandGrid >
		

				{isLoading && (
				<>
					<BandCardLoader/>
					<BandCardLoader/>
					<BandCardLoader/>
					<BandCardLoader/>
					<BandCardLoader/>
					<BandCardLoader/>
					<BandCardLoader/>
					<BandCardLoader/>
					<BandCardLoader/>
					<BandCardLoader/>
					<BandCardLoader/>
					<BandCardLoader/>
					<BandCardLoader/>
					<BandCardLoader/>
					<BandCardLoader/>
					<BandCardLoader/>
					<BandCardLoader/>
					<BandCardLoader/>
					<BandCardLoader/>

				</>
		)}

		{!isLoading && bands.map((band)=> (
		 <BandCard
				id={band.artist.id}
				name={band.artist.name}
				bandImage={band['artist']['picture_medium']}
				albumImage1= {band.albuns[0]?.cover_medium}
				albumImage2= {band.albuns[1]?.cover_medium}
				verMais= {band.musics.length}
			/>
	
		))}
		

	

		</BandGrid>
		</MarginY>


		</main>
		</>
	);

}