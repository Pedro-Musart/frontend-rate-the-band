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
import DefaultBands from '../common-components/Data/DefaultBands';
import { Description } from '../common-components/Tipografia/Description';

// Estilização para a grade de cards das bandas
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

// Ícone de busca
const Icon = styled.img.attrs({
  src: searchIcon,
})`
  width: 23px;
  height: 23px;
`;

// Estilização para adicionar margem inferior
const MarginBottom = styled.div`
  margin-bottom: 120px;
`;

// Estilização para adicionar margem vertical
const MarginY = styled.div`
  margin: 60px 0px 60px 0px;
`;

// Estilização para o wrapper que contém o campo de busca e o botão
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
  // Armazena o valor digitado pelo usuário no campo de busca e se o botão de busca foi pressionado
  const [search, setSearch] = React.useState({
    value: "",
    doSearch: false,
  });

  // Atualiza o valor de busca conforme o usuário digita
  function handleUpdateSearchValue({ target: { value } }) {
    setSearch((prevValue) => ({
      ...prevValue,
      value
    }));
  }

  // Ativa a busca quando o botão é clicado
  function handleSearch() {
    setSearch((prevValue) => ({
      ...prevValue,
      doSearch: true
    }));
  }

  // Armazena o nome da banda digitado pelo usuário
  const [bandName, setBandName] = React.useState('');

  // Atualiza o nome da banda com o valor da busca quando o botão de busca é pressionado
  React.useEffect(() => {
    if (search.doSearch) {
      setBandName(search.value);
      setSearch((prevValue) => ({
        ...prevValue,
        doSearch: false
      }));
    }
  }, [search]);

  // Utiliza o hook de busca de banda, passando o nome da banda e obtém os dados da requisição e um indicador booleano de carregamento
  const { bands, isLoading } = useBandSearch(bandName);

  return (
    <>
      <Preloader />
      <main className="container-xl">
        <MarginBottom>
          <InfoApresentation />
        </MarginBottom>

        <HeadingThree className='mb-4'>Pesquisar Bandas</HeadingThree>
        <Wrapper>
          <SearchField
            placeholder="Digite o nome da banda"
            onKeyUp={handleUpdateSearchValue}
          />
          <div>
            <Button onClick={handleSearch}>
              <Icon className="me-4" />
              Buscar
            </Button>
          </div>
        </Wrapper>

        <MarginY>
          <BandGrid>
            {/* Renderiza o loader dos cards enquanto os dados estão carregando */}
            {isLoading && Array.from({ length: 20 }).map((_, index) => (
              <BandCardLoader key={index} />
            ))}

            {/* Renderiza as bandas padrões se nenhum nome de banda foi inserido */}
            {!bandName && DefaultBands.map((band) => (
              <BandCard
                key={band.artist.id}
                id={band.artist.id}
                name={band.artist.name}
                bandImage={band.artist.picture_medium}
                albumImage1={band.albuns[0]?.cover_big}
                albumImage2={band.albuns[1]?.cover_big}
                albumImage3={band.albuns[2]?.cover_big}
                verMais={band.musics.length}
              />
            ))}

            {/* Renderiza as bandas obtidas da busca */}
            {!isLoading && bands.map((band) => (
              <BandCard
                key={band.artist.id}
                id={band.artist.id}
                name={band.artist.name}
                bandImage={band.artist.picture_medium}
                albumImage1={band.albuns[0]?.cover_big}
                albumImage2={band.albuns[1]?.cover_big}
                albumImage3={band.albuns[2]?.cover_big}
                verMais={band.musics.length}
              />
            ))}
          </BandGrid>

          {/* Mensagem de "nenhum resultado encontrado" quando a busca não retorna resultados */}
          {!isLoading && bandName && bands.length === 0 && (
            <div className='d-flex flex-column align-items-center'>
              <HeadingThree>Nenhum Resultado Encontrado!</HeadingThree>
              <Description className='mt-2'>Verifique se o nome da banda foi inserido corretamente e tente novamente.</Description>
            </div>
          )}
        </MarginY>
      </main>
    </>
  );
}

