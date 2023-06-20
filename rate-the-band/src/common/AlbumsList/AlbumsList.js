import { useAlbumSearch } from "../../hooks/useBand";
import { OEmbed } from "../../common-components/OEmbed/OEmbed";
import React, { useEffect, useState } from "react";


const DelayedRender = ({ delay, children }) => {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, delay);

      return () => clearTimeout(timer);
    }, [delay]);

    return shouldRender ? children : null;
  };

export function AlbumsList({ id }) {

  const { album, isLoadingAlbum } = useAlbumSearch(id);

  return (
    <>

      {!isLoadingAlbum && album.map((album, index) => {
        const delay = 500 * index; // Atraso em milissegundos para cada iteração
        return (
          <DelayedRender delay={delay} key={album.id}>
            <OEmbed id={album.id} />
          </DelayedRender>

        );
      })} 
    </>
  );
}
