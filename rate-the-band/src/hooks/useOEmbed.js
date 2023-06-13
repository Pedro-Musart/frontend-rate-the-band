import React, {
    useEffect,
    useState
} from "react";
import axios from "axios";

export function useOEmbed(albumId) {
    const [album, setAlbum] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await search(albumId);
          setAlbum(response.data);
  
          setIsLoading(false);
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [albumId]); // Adiciona albumId como dependência
  
    async function search(id) {
      const options = {
        method: "GET",
        url: `https://api.deezer.com/oembed?url=https://www.deezer.com/album/${id}/&maxwidth=700&maxheight=300&tracklist=true&output=json"`,
      };
  
      setIsLoading(true);
      try {
        const response = await axios.request(options);
        return response.data;
      } catch (error) {
        throw new Error(error);
      }
    }
  
    return {
      album,
      isLoading,
    };
  }
  