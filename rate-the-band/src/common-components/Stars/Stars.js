import star from '../../assets/icons/star.svg'
import emptyStar from '../../assets/icons/emptyStar.svg'
import styled from 'styled-components';
import { useBand } from '../../hooks/useBand';
const Star = styled.img.attrs({
	src: star,
})`

	width: 100%;
    padding: 10%;
`;


const EmptyStar = styled.img.attrs({
	src: emptyStar,
})`
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
    var a = parseInt(number, 10);
   
  
    return (
        <div>
       
          <Flex>
          {[...Array(a)].map((_, index) => (
            <Star key={index} />
          ))}
          {[...Array(5 - a)].map((_, index) => (
            <EmptyStar key={index} />
          ))}
             </Flex>
        </div>
      );
    }