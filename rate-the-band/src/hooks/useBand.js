import React, { useEffect, useState } from "react";
import $ from 'jquery';

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

  return { band, isLoading };
}
