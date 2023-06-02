import styled, { keyframes } from 'styled-components';
import { Colors, Spaces } from "../../shared/DesignTokens";
import rateTheBandLogo from '../../assets/images/rate-the-band-logo.svg'
import githubIcon from '../../assets/icons/github.svg'
import navIcon from '../../assets/icons/navIcon.svg' 
import { Button } from "../../common-components/Button/Button";
import { Link } from "../../common-components/Link/Link";
import React from 'react';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;

  }
  to {
    opacity: 1;
  }
`;

const Navbar = styled.header`
 width: 100%;
 background-color: ${Colors.NEUTRAL_BLACK};
 padding: ${Spaces.THREE} ${Spaces.SIX};
 align-items: center;
animation: ${fadeInAnimation} 300ms;
@media (max-width: 990px) {
   flex-direction: column;    
	`;

const Responsive = styled.div`
animation: ${fadeInAnimation} 1000ms;
width: 100%;
`

const Background = styled.div`
 background-color: ${Colors.NEUTRAL_BLACK};

`

 const Logo = styled.img.attrs({
    src: rateTheBandLogo,
    alt: 'Logo "Rate The Band"'
 })`
 height: 100%
 `;


 const GithubIcon = styled.img.attrs({
    src: githubIcon,
    alt: 'Logo "Github"'
 })`
 height: 100%;
 margin-right: ${Spaces.ONE_HALF};
 `;
 const NavIcon = styled.img.attrs({
    src: navIcon,
    alt: 'Logo "icone navbar"'
 })`
 height: 25px;

 `;




 
 export function Header (){

  
   const { isTab, isMobile } = useWindowDimensions();
   const [menuClick, setMenuClick] = React.useState(false);


   function navBarStates(isMobile, menuClick){

   
   let Estado = ""; 
   //estado 0
   if (!isTab) {
      Estado = 
      
      <Navbar  className="d-flex justify-content-between">
      <Logo/>
      <div className="d-flex justify-content-between">
             <Link className="me-4">Home</Link>
            <Link className="me-4">Procurar</Link>
            <Button>
               <GithubIcon/> 
               Github
            </Button>
      </div>
   </Navbar>
   }

   //estado 1
   if (isTab) {
   Estado = 
      <Navbar className="d-flex justify-content-between">
      <div className="d-flex w-100 justify-content-between">
         <Logo />
         {!menuClick &&(
                      <button type="button" onClick={() => setMenuClick(true)} className="btn" >
            <NavIcon/>
         </button>
         )}

         {menuClick &&(
                      <button type="button" onClick={() => setMenuClick(false)} className="btn" >
            <NavIcon/>
         </button>
         )}
         </div>
         
         {menuClick && (
            
                     <Responsive>
             <Link className="me-4">Home</Link>
            <Link className="me-4">Procurar</Link>
            <Button>
               <GithubIcon/> 
               Github
            </Button>
            
      
         </Responsive>
         )}
         

   </Navbar>
   }


   return (Estado)
 };

    return (
      <>

     {navBarStates(isTab, menuClick)}
      
         
      </>
    )
 }


