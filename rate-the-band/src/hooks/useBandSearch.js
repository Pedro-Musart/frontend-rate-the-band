import { useEffect, useState } from "react";
import axios from "axios";



export function useBandSearch(BandName) {
  const [bands, setBands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await search(BandName);
        setBands(newBand(response.data));
        console.log(response.data)
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [BandName]);

  async function search(name) {
    const options = {
      method: "GET",
      url: `https://deezerdevs-deezer.p.rapidapi.com/search?q=artist:"${name}"`,

    };

    setIsLoading(true);
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  


    //a API do deezer retorna varios albuns com diversos artistas repetidos, essa função retorna um map organizado com as informações de cada artista/banda e todos os albuns relacionados a ele
    function newBand(bandas) {

        let bandaUnica = new Map();
        const bandArray = bandas.filter((valorAtual) => {

            //esse trecho cria um array apenas com os albuns correspondentes ao id do artista do valorAtual

            let bandAlbums = []
            const albumsFilter = bandas.filter((albumAtual) => {
              if (
                albumAtual.artist.id === valorAtual.artist.id &&
                !bandAlbums.some((album) => album.id === albumAtual.album.id)
              ) {
                bandAlbums.push(albumAtual.album)
              }
            });

            

            let bandMusics = []
            const musicsFilter = bandas.filter((musicaAtual) => {
                if (musicaAtual.artist.id === valorAtual.artist.id) {
                    bandMusics.push(musicaAtual.title)
                }
            });

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


    return {
        bands,
        isLoading
    }
}