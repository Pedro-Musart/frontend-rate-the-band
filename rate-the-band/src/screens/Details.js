import styled from 'styled-components';
import { Box } from 'reflexbox';
import { Card } from '../common-components/Card/Card';
import { Caption } from '../common-components/Tipografia/Caption';
import { Description } from '../common-components/Tipografia/Description';
import { HeadingTwo } from '../common-components/Tipografia/HeadingTwo';
import { ButtonLink } from '../common-components/ButtonLink/ButtonLink';
import {
	BorderRadiuses,
	Colors,
	Shadows,
	Spaces,
	FontSizes,
	FontFamilies,
	FontWeights,
} from '../shared/DesignTokens';
import background from '../assets/images/background.svg' 
import { InfoApresentation
 } from '../common/InfoApresentation/InfoApresentation';
import { Stars } from '../common-components/Stars/Stars';
import { Button } from '../common-components/Button/Button';
import { useBand } from '../hooks/useBand';
import { useParams } from 'react-router';
import { HeadingFour } from '../common-components/Tipografia/HeadingFour';
import { HeadingFive } from '../common-components/Tipografia/HeadingFive';

const Background = styled.div`
    justify-content: center;
    width: 100%;
    height: 320px; 
	background: linear-gradient(180deg, rgba(0, 0, 0, 0) 13.54%, #2B2B2B 95.31%), url('${(props) => props.src}');
    background-repeat: no-repeat;
    background-position: center; 
    background-size: cover;
    @media (max-width: 900px) {
	height: 250px;
`


const ImageContainer = styled.div`
  
    display: flex;
    justify-content: left;
    width:100%;
    @media (max-width: 900px) {
	justify-content: center;

`
const Image = styled.div`
    
    position: relative;
    bottom: 3vw;
	width: 207px;
	height: 207px;
	border-radius: ${BorderRadiuses.ONE};
    border: 5px solid ${Colors.NEUTRAL_PURPLE};
	background-image: url('${(props) => props.src}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	@media (max-width: 700px) {
	width: 158px;
	height: 158px;
`

const FlexOne = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: center;

    @media (max-width: 900px) {
    flex-direction: column;
    }

    @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    }
`

const FlexTwo = styled.div`
    width: 100%;
    display: flex;
    @media (max-width: 500px) {
    justify-content: center;
    align-items: center;

    }
`

const FlexThree = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
    align-items: center;

    @media (max-width: 900px) {
    justify-content: start; 
    }

        @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    }

`

const StarBox = styled.div`
    margin: 0px 2vw 0px 0px;
        @media (max-width: 500px) {
    margin: 20px 0px 10px 0px;
}

`
const Padding = styled.div`
    padding: 0px 5vw 0px 5vw;
`


export function Details(bandImage) {


	const { id } = useParams();
	const { band, isLoading } = useBand(id);
    
	console.log(band);



    return (
        <>
        <div>
            <Background src={background}> 
           
            </Background>
            
            <div className='container'>
            {!isLoading && (
                <ImageContainer>
                <Image src={band.picture_big}/>
            </ImageContainer>
            )};
            </div>

        </div>
        <div className='container'>
        {!isLoading &&(
            <>
         <FlexOne>
            
            <FlexTwo >
            <HeadingTwo>
                {band.name}
            </HeadingTwo>
            </FlexTwo>
            <FlexThree>
                <StarBox>
                <Stars  />
                </StarBox>
                <div>
                <Button> Avalie </Button>
                </div>
            </FlexThree>
            </FlexOne>
            
             <FlexTwo className='mt-5'>
            
            <div className='pe-5 me-5'>
                <HeadingFour>
                    {band.nb_album} +
                </HeadingFour>
                <HeadingFive>Albums</HeadingFive>
            </div>
            <div>
           
                <HeadingFour>
                    {band.nb_fan} +
                </HeadingFour>
                <HeadingFive>Fãs</HeadingFive>
         
            </div>
        </FlexTwo>
        </>
        )}
            </div>

            
        </>
    )
}