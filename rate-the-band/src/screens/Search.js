import React from 'react';
import { Box } from 'reflexbox';
import { SearchField } from '../common-components/SearchField/SearchField';
import { Spaces, BorderRadiuses } from '../shared/DesignTokens';
import { BandCard } from '../common/BandCard/BandCard';
import { BandCardLoader } from '../common/BandCard/BandCardLoader';
import styled from 'styled-components';
import { HeadingThree } from '../common-components/Tipografia/HeadingThree';
import { InfoApresentation } from '../common/InfoApresentation/InfoApresentation';
import { Button } from "../common-components/Button/Button";
import searchIcon from '../assets/icons/search.svg';
import { useBandSearch } from '../hooks/useBandSearch';
import { Preloader } from '../common/Preloader/Preloader';

const BandGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: ${Spaces.ONE_HALF};

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr 1fr;
    gap: ${Spaces.TWO};
  }
`;

const Icon = styled.img.attrs({
  src: searchIcon,
})`
  width: 23px;
  height: 23px;
`;

const MarginBottom = styled.div`
  margin-bottom: 120px;
`;

const MarginY = styled.div`
  margin: 60px 0px 60px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 16px 1fr;
  gap: ${Spaces.TWO};
  padding: ${Spaces.NONE} ${Spaces.NONE} ${Spaces.NONE} ${Spaces.TWO};
  background: white;
  border-radius: ${BorderRadiuses.ONE};
`;

export function Search() {

	function handleUpdateSearchValue({
		target: {
			value
		}
	}) {
		setSearch((prevValue) => ({
			...prevValue,
			value
		}));
	}

	function handleSearch() {
		setSearch((prevValue) => ({
			...prevValue,
			doSearch: true
		})
    );
	}

	const [bandName, setBandName] = React.useState('rock');
	const [search, setSearch] = React.useState({
		value: "",
		doSearch: false,
	});


  
	React.useEffect(() => {
		if (search.doSearch) {
			setBandName(search.value);
      
			setSearch((prevValue) => ({
				...prevValue,
				doSearch: false
			})
      );
    
    }
	}, [search]);


	const {
		bands,
		isLoading
	} = useBandSearch(bandName);

console.log(bands)
  return (
    <>
    <Preloader />
      <main className="container-xl">
        <MarginBottom>
          <InfoApresentation></InfoApresentation>
        </MarginBottom>

        <HeadingThree className='mb-4'>Campo de Busca</HeadingThree>
        <Wrapper>
          <SearchField
            placeholder="Digite uma banda"
            onKeyUp={handleUpdateSearchValue}
          ></SearchField>

          <div>
            <Button onClick={handleSearch}>
              <Icon className="me-4" />
              Buscar
            </Button>
          </div>
        </Wrapper>

        <MarginY>
          <BandGrid>
            {isLoading && (
              <>
                <BandCardLoader />
                <BandCardLoader />
                <BandCardLoader />
                <BandCardLoader />
                <BandCardLoader />
                <BandCardLoader />
                <BandCardLoader />
                <BandCardLoader />
                <BandCardLoader />
                <BandCardLoader />
                <BandCardLoader />
                <BandCardLoader />
                <BandCardLoader />
                <BandCardLoader />
                <BandCardLoader />
                <BandCardLoader />
                <BandCardLoader />
                <BandCardLoader />
                <BandCardLoader />
              </>
            )}

            {!isLoading && bands.map((band) => (
              <BandCard
                id={band.artist.id}
                name={band.artist.name}
                bandImage={band['artist']['picture_medium']}
                albumImage1={band.albuns[0]?.cover_big}
                albumImage2={band.albuns[1]?.cover_big}
                verMais={band.musics.length}
              />
            ))}
          </BandGrid>
        </MarginY>

        
      </main>
    </>
  );
}
