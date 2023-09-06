import styled, { keyframes } from 'styled-components';
import { Colors, Spaces, FontSizes } from "../../shared/DesignTokens";
import rateTheBandLogo from '../../assets/images/rate-the-band-logo.svg';
import githubLogo from '../../assets/icons/githubLogo.svg';
import linkedinLogo from '../../assets/icons/linkedinLogo.svg';
import instagramLogo from '../../assets/icons/instagramLogo.svg';
import navIcon from '../../assets/icons/navIcon.svg' 
import { Button } from "../../common-components/Button/Button";
import { Link } from "../../common-components/Link/Link";
import React from 'react';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { Description } from '../Tipografia/Description';
import { Caption } from '../Tipografia/Caption';


const Background = styled.div`
 background: ${Colors.NEUTRAL_BLACK1};
`;


const Logo = styled.img.attrs({
    src: rateTheBandLogo,
    alt: 'Logo "Rate The Band"'
 })`
 width:15rem;
 @media (max-width: 990px) {
   width:10rem;  
} 
	
 `;

 const Instagram = styled.img.attrs({
    src: instagramLogo,
    alt: 'Logo "Instagram"'
 })`
 
 width:4rem;
  
} 
	
 `; 

 const Github = styled.img.attrs({
    src: githubLogo,
    alt: 'Logo "Github"'
 })`

 width:4rem;
 
} 
	
 `; 

 const Linkedin = styled.img.attrs({
    src: linkedinLogo,
    alt: 'Logo "Linkedin"'
 })`
 
 width:4rem;
 
} 
	
 `; 

 const Foot = styled.div`
    border-top: 1px solid white;
    
 `


export function Footer() {
    return(
        <>
   

        <Background className='w-100 navbar-fixed-bottom '>
            
            <footer className='container d-flex flex-column col-lg-6 col-sm-6 '>
            <Logo></Logo>
            <Description> Olá! Meu nome é Pedro e sou o criador deste site. Ele foi desenvolvido com o objetivo de aplicar os conceitos de React que aprendi durante a minha graduação. Agradeço por acessá-lo e espero que aproveite a sua visita! </Description>

            <div className='mt-4 '>
            <Description>Minhas Redes Sociais:</Description>
            <div className='d-flex mt-4'>
                <a className='me-4' href='https://github.com/Pedro-Musart'>
                <Github />
                </a>
                <a className='me-4' href='https://www.instagram.com/pedro_musart/'>
                <Instagram/>
                </a>
                <a href='https://www.linkedin.com/in/pedro-wesley-soares/'>
                <Linkedin/>
                </a>
                
                                
            </div>
            </div>
            <Foot className=' mt-4 p-2 d-flex justify-content-center'>
            <Description >Ⓒ Rate the Band - 2023</Description>
            </Foot>
            </footer>

            
        </Background>
        </>
    )

}