import { useAlbumSearch } from "../../hooks/useBand";
import { OEmbed } from "../../common-components/OEmbed/OEmbed";
import React, { useEffect, useState } from "react";
import { useBandSearch } from "../../hooks/useBandSearch";




export function AlbumsList({ name }) {

  const { bands, isLoading} = useBandSearch(name);

  const newBand = bands.filter((band) => band.artist.name === name )

  console.log(newBand)

  const albumIds = newBand.map((band) => band.albuns.map((album) => album.id)).flat();


  return (
    <>

   

      {!isLoading && albumIds.map((albumId, index) => {
        const delay = 1000 * index; // Atraso em milissegundos para cada iteração

        return (

            <OEmbed id={albumId} />

        );
      })} 
    </>
  );
}
