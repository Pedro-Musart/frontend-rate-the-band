import React, {
    useEffect,
    useState
} from "react";
import $ from 'jquery';


export function useOEmbed (albumId) {
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

    }, []);


    function search(id) {
        const url = `https://api.deezer.com/oembed?url=https://www.deezer.com/album/${id}/&maxwidth=700&maxheight=300&tracklist=true&output=json`;
        setIsLoading(true);
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'GET',
                url,
                dataType: 'json',
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


    return {
        album,
        isLoading
    }
}