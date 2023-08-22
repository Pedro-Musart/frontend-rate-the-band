import styled, {keyframes} from "styled-components";

export function OEmbed({id}){

const AppearFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Animation = styled.div`
  margin-top: 20px;
  animation: ${AppearFromLeft} 2s ease-in-out;
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