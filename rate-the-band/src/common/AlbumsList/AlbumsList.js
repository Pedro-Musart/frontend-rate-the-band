import { useAlbumSearch } from "../../hooks/useBand";
import { OEmbed } from "../../common-components/OEmbed/OEmbed";

import { DelayedRender } from "../../common-components/Functions/DelayedRender/DelayedRender";



export function AlbumsList({ id }) {

  const { album, isLoadingAlbum } = useAlbumSearch(id);

  return (
    <>

      {!isLoadingAlbum && album.map((album, index) => {
        const delay = 50 * index; // Atraso em milissegundos para cada iteração
        return (
          
          <DelayedRender delay={delay} key={album.id}>
            <OEmbed id={album.id} />
          </DelayedRender>

        );
      })} 
    </>
  );
}
