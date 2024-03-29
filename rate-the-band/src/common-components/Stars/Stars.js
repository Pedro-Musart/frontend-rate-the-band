import React from 'react';
import star  from '../../assets/icons/star.svg'
import emptyStar from '../../assets/icons/emptyStar.svg'
import styled, { keyframes } from 'styled-components';
import { useBand } from '../../hooks/useBand';


const fadeAnimation = keyframes`
  0% {
    transform: scale(0);
  }
 
  100% {
    transform: scale(1);
  }
`;

const Star = styled.img.attrs({
	src: star,
})`
  animation-name: ${fadeAnimation};
  animation-duration: 0.1s;
  animation-timing-function: ease-out;
	width: 100%;
  padding: 10%;
`;


const EmptyStar = styled.img.attrs({
	src: emptyStar,
})`
    animation-name: ${fadeAnimation};
    animation-duration: 0.1s;
    animation-timing-function: ease-out;
    width: 100%;
    padding: 10%;
`;

const Flex = styled.div`
    width: 100%;

   
    display: grid; 
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
    
    align-items: center;
`


export function Stars({number}) {

  const [starsCount, setStarsCount] = React.useState(0);

  React.useEffect(() => {
    // Convertendo o número para inteiro e definindo o estado de starsCount
    const parsedNumber = parseInt(number, 10);
    setStarsCount(parsedNumber);
  }, [number]);

    return (
      
        <div>
       
          <Flex>
          {[...Array(starsCount)].map((_, index) => (
            <Star key={index} />
          ))}
          {[...Array(5 - starsCount)].map((_, index) => (
            <EmptyStar key={index} />
          ))}
             </Flex>
        </div>
      );
    }
     