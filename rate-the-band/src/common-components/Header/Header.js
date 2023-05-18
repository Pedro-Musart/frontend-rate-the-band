import styled from 'styled-components';
import { Colors, Spaces } from "../../shared/DesignTokens";
import rateTheBandLogo from '../../assets/images/rate-the-band-logo.svg'
import githubIcon from '../../assets/icons/github.svg'
import navIcon from '../../assets/icons/navIcon.svg' 
import { Button } from "../../common-components/Button/Button";
import { Link } from "../../common-components/Link/Link";
import React from 'react';
import { useState, useEffect } from "react";
import { SearchField } from '../SearchField/SearchField';



const Navbar = styled.header`
 width: 100%;
 background-color: ${Colors.NEUTRAL_BLACK};
 padding: ${Spaces.THREE} ${Spaces.SIX};
 align-items: center;
 transition: 300ms all ease;
@media (max-width: 950px) {
   flex-direction: column;

	`;

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

 const Responsive = styled.div`
 @media (max-width: 900px) {
   flex-direction: column;
	
   transition-duration: 2s;
 `;


 
 export function Header (){

   function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height} = window;
      return {width, height}
   }

   const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
   )

   const [menuClick, setMenuClick] = React.useState(false);
   const [isMobile, setIsMobile] = React.useState(false);

   useEffect(() => {
      function handleResize(){
      setWindowDimensions(getWindowDimensions());
   }
   
   window.addEventListener("resize", handleResize);
   return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      setIsMobile(windowDimensions.width < 1000 ? true: (setIsMobile(false), setMenuClick(false)));
    }, [windowDimensions]);
  

   function navBarStates(isMobile, menuClick){

   let Estado = ""; 
   //estado 0
   if (!isMobile) {
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
   if (isMobile) {
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
                    <div className="w-100 " >
             <Link className="me-4">Home</Link>
            <Link className="me-4">Procurar</Link>
            <Button>
               <GithubIcon/> 
               Github
            </Button>
         </div>
         )}

   </Navbar>
   }


   return (Estado)
 };

    return (
      <>
      <Background>

      </Background>
     {navBarStates(isMobile, menuClick)}
      

         
      </>
    )
 }


