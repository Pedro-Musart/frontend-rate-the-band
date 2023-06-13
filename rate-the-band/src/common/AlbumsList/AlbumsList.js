import { useAlbumSearch } from "../../hooks/useBand";
import { OEmbed } from "../../common-components/OEmbed/OEmbed";
import React, { useEffect, useState } from "react";
import { useBandSearch } from "../../hooks/useBandSearch";


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

export function AlbumsList({ name }) {

  const { bands, isLoading} = useBandSearch(name);
  const albumIds = bands.map((band) => band.albuns.map((album) => album.id)).flat();

  console.log(bands)
  return (
    <>

   

      {!isLoading && albumIds.map((albumId, index) => {
        const delay = 1000 * index; // Atraso em milissegundos para cada iteração

        return (
          <DelayedRender delay={delay} key={albumId}>
            <OEmbed id={albumId} />
          </DelayedRender>
        );
      })} 
    </>
  );
}
