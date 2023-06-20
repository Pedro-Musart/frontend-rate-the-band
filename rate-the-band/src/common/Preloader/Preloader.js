import styled from "styled-components"
import { Colors } from "../../shared/DesignTokens"
import AnimationLogo from "../../assets/icons/animationLogo.gif"
import { useState } from "react";
import { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
0% {
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
const AnimationDiv = styled.div`

    height: 100vh;
    widthl 100%;
    background: #2a2a29;
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    left:0;
    right:0;
    z-index:55;
    display:flex;
    justify-content: center;
    align-items:center;
    overflow:hidden;
    animation: ${fadeInAnimation} 3.0s ;
`



const Animation = styled.img.attrs({
    src: AnimationLogo,
    alt: 'Logo "Rate The Band"'
 })`

 width:25rem;
 @media (max-width: 990px) {
    width:15rem;  
 } 
	
 `;



export const Preloader = () => {
    
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
    

    return (
        <>
            {loading &&( 
                            <AnimationDiv>
                            <Animation/>
                            </AnimationDiv>
            )}


        </> 
    )
}
