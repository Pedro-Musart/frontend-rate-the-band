import { useOEmbed } from "../../hooks/useOEmbed";


export function OEmbed({id}){

    return(
        <>
        <div className="container">

           
        <div className="my-5">
      <iframe
        title="deezer-widget"
        src={`https://widget.deezer.com/widget/dark/album/${id}`}
        width="100%"
        height="300"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media; clipboard-write">
        </iframe>          
        </div>
        </div>
        </>
    );
} 