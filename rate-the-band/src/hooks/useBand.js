import { useEffect, useState } from "react";
import $ from 'jquery';


export function useBand(bandId) {

  const [isLoading, setIsLoading] = useState(true);
  const [band, setBand] = useState(null);

  function setBandAvaliation(band) { 
      localStorage.setItem(band.id, JSON.stringify(band));
    }
  function getBandAvaliation(bandId) {
    return JSON.parse(localStorage.getItem(bandId));
  }


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

  return { band, isLoading, setBandAvaliation, getBandAvaliation };
}

export function useAlbumSearch(bandId) {

  const [album, setAlbum] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await search(bandId);
        setAlbum(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [bandId]);

  function search(id) {
    const url = `https://api.deezer.com/artist/${id}/albums&output=jsonp`;
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

  return { album, isLoading };
}


