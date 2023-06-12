import styled from 'styled-components';
import { Colors, Spaces, FontSizes, FontFamilies, FontWeights, BorderRadiuses} from "../../shared/DesignTokens";
import { Button } from "../../common-components/Button/Button";
import React from 'react';
import { Description } from '../../common-components/Tipografia/Description';
import githubIcon from '../../assets/icons/github.svg';
import cardImage from '../../assets/images/card-image.jpg';
import hand from '../../assets/icons/hand.svg';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

const GithubIcon = styled.img.attrs({
    src: githubIcon,
    alt: 'Logo "Github"'
 })`
 height: 100%;
 margin-right: ${Spaces.ONE_HALF};
 `;
const Hand = styled.img.attrs({
    src: hand,
    alt: 'Hand - logo "Rate the Band"'
 })`
 margin-right: ${Spaces.ONE_HALF};
 `;

 const CardImage = styled.img.attrs({
    src: cardImage,
    alt: 'Imagem do "Card"'
 })`
 width: 510px;
 height: 401px;
 object-fit: cover;
 border-radius: 20px 20px 0px 0px;

    @media (max-width: 990px) {
    width: 330px;
    height: 221px;
}

    @media (max-width: 770px) {
    width: 300px;    
}

	@media (max-width: 570px) {
    width: 100%;}

 `;
 

 const Card = styled.div`
    width: 510px;
    height: 510px;
    background-color: #3b3b3b;
    padding: 0px;
    border-radius: ${BorderRadiuses.ONE};
    @media (max-width: 990px) {
    width: 330px;
    height: 330px; 
    
    @media (max-width: 770px) {
    width: 300px;
    
}

    @media (max-width: 570px) {
    width: 100%;

 `;

 const H5 = styled.h5 `
 	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	font-size: ${FontSizes.H5};
	color: ${Colors.NEUTRAL_WHITE};
	margin: 0;
	padding: 0;
 `;

 const Section = styled.section`
 display: flex;
 justify-content: space-between;
 align-items: center;
 `;



 export const HeadingOne = styled.h1`
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	font-size: ${FontSizes.H1};
	color: ${Colors.NEUTRAL_WHITE};
	margin: 0;
	padding: 0;
    width: 328px;

	@media (max-width: 990px) {
    font-size: ${FontSizes.H3};
    width: 185px;
    }
	
	@media (max-width: 375px) {
    font-size: ${FontSizes.H4};
    width: 315px;
    }
`;


export function InfoApresentation () {

   const { isTab, isMobile } = useWindowDimensions();


    return(
        <div className='container'>
        
        <Section className='row py-5'>
            <div className='d-flex col-12 col-sm-5 col-md-5 col-xl-6 justify-content-between flex-column py-5 '>
                <HeadingOne>Busque Artistas &  Avalie</HeadingOne>
                <Description className='my-4'>Busque seus artistas favoritos e dê uma avaliação a eles! Funciona através da API do deezer.</Description>
                

            {!isMobile && (
                <form style={{width: '185px'}} method = 'get'
                action = 'https://github.com/Pedro-Musart/rate-the-band'>
                
                <Button className='mt-5'>
                 <GithubIcon/> 
               Github
            </Button>
            </form>
            )}

            </div>
            <Card className='d-flex col-12 col-sm-4 col-md-6 flex-column justify-content-between'>
                <div>
                    <CardImage></CardImage>
                </div>
                <div className='d-flex align-items-center h-100'>
                <div className='m-4'>
                <H5>Seu Artista Favorito Aqui!</H5>
                <Hand></Hand>
                <Description>Rate the Band</Description>
                </div>
                </div>
            </Card>

            {isMobile && (
                <form form method = 'get'
                action = 'https://github.com/Pedro-Musart/rate-the-band'>
                <Button className='mt-5'>
                 <GithubIcon/> 
               Github
            </Button>
            </form>
            )}
        </Section>
        </div>
    )
}