
// essa função recebe como parâmetro o id da banda/artista e devolve a renderização do OEmbed do Deezer
export function OEmbed({id}){
    return(
        <>  
        <div className="my-5 container">
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
        </>
    );
} 