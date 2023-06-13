import React, { useEffect, useState } from "react";
import $ from 'jquery';
import axios from "axios";

export function useBand(bandId) {
  const [isLoading, setIsLoading] = useState(true);
  const [band, setBand] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await search(bandId);
        setBand(response);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [bandId]);

  function search(id) {
    const url = `https://api.deezer.com/artist/${id}&output=jsonp`;

    if (!band){
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
    } else {
      return Promise.resolve(band);
    }
    
  }

  return { band, isLoading };
}

export function useAlbumSearch(BandName) {
  const [album, setAlbum] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await search(BandName);
          setAlbum(newAlbums(response.data));
          setIsLoading(false);
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [BandName]);
  
    async function search(BandName) {
      const options = {
        method: "GET",
        url: `https://deezerdevs-deezer.p.rapidapi.com/search?q=artist:"${BandName}"`,
  
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
     function newAlbums(bandas) {

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
                  albuns: bandAlbums,
              }
              bandaUnica.set(valorAtual.artist.id, bandObject)
          }
      })


      return ([...bandaUnica.values()])

  }

  
  return { album, isLoading };
}
