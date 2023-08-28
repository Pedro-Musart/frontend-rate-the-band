import styled, {keyframes} from "styled-components";

// essa função recebe como parâmetro o id da banda/artista e devolve a renderização do OEmbed do Deezer

export function OEmbed({id}){


const AppearFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
    
  }

  90% {
    transform: translateX(-70%);
    opacity: 0.5;
    
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Animation = styled.div`
  margin-top: 20px;
  animation: ${AppearFromLeft} 1s ease-in-out;
`;


    return(
        <>
        <Animation className="container">

           
        <div classAName="my-5">
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
        </Animation>
        </>
    );
} 