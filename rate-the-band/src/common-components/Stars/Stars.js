import star from '../../assets/icons/star.svg'
import starTwo from '../../assets/icons/2star.svg'
import styled from 'styled-components';

const Star = styled.img.attrs({
	src: star,
})`

	width: 100%;
    padding: 10%;
`;

const StarTwo = styled.img.attrs({
	src: starTwo,
})`
    width: 100%;
`;

const Flex = styled.div`
    width: 100%;

   
    display: grid; 
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
    
    align-items: center;
`

export function Stars() {
    return (
       <div>
    <Flex>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
    </Flex>
    </div>
    )
}