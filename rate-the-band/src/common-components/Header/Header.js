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
 padding: ${Spaces.NONE} ${Spaces.SIX};
 align-items: center;
animation: ${fadeInAnimation} 300ms;
@media (max-width: 990px) {
   flex-direction: column; 
   padding: ${Spaces.NONE} ${Spaces.THREE};   
	`;

const Responsive = styled.div`
animation: ${fadeInAnimation} 1000ms;
width: 100%;
`


 const Logo = styled.img.attrs({
    src: rateTheBandLogo,
    alt: 'Logo "Rate The Band"'
 })`
 width:15rem;
 @media (max-width: 990px) {
   width:10rem;  
} 
	
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
   const [searchClick, setSearchClick] = React.useState(false);

 
//  rola a página para o campo de busca
   React.useEffect(() => {
      if (searchClick) {
         const currentURL = window.location.href;
         var searchY = 750
         if (isMobile){
            searchY = 1050
         }
         if(currentURL.includes("details")) {


            window.location.href = "/"
            
        
        
        } else{
                window.scrollTo(0, searchY);
                setSearchClick(false)
        
        }
        
      }
    }, [searchClick]);

   function navBarStates(isMobile, menuClick){

   
   let Estado = ""; 
   //estado 0
   if (!isTab) {
      Estado = 
      
      <Navbar  className="d-flex justify-content-between">
                  <a href='/'>
                  <Logo/>           
                  </a>
    
      <div className="d-flex justify-content-between align-items-center">
            <a href='/'>
            <Link className="me-4" >Home</Link>
            </a>
            <a >
            <Link className="me-4"  onClick={() => setSearchClick(true)} >Procurar</Link>
            </a>
            
         
            <form  method = 'get'
                action = 'https://github.com/Pedro-Musart/rate-the-band'>
                <Button >
                 <GithubIcon/> 
               Github
            </Button>
            </form>
         
      </div>
   </Navbar>
   }

  
   if (isTab) {
   Estado = 
      <Navbar className="d-flex justify-content-between">
      <div className="d-flex w-100 justify-content-between">
         <a href='/'>
         <Logo/>           
         </a>
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
            <a href='/'>
            <Link className="me-4" >Home</Link>
            </a>
            <a >
            <Link className="me-4"  onClick={() => setSearchClick(true)} >Procurar</Link>
            </a>
            <form  method = 'get'
                action = 'https://github.com/Pedro-Musart/rate-the-band'>
                <Button >
                 <GithubIcon/> 
               Github
            </Button>
            </form>
            
      
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


