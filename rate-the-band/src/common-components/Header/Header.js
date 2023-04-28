import styled from "styled-components";
import { Colors, Spaces } from "../../shared/DesignTokens";
import rateTheBandLogo from '../../assets/images/rate-the-band-logo.svg'
const Wrapper = styled.header`
 width: 100%;
 height: 60px;
 background-color: ${Colors.NEUTRAL_BLACK};
 padding: ${Spaces.TWO};
 display: flex;
 justify-content: center;
 align-items: center;
 @media (min-width: 1024px) {
    height: 90px;
 }`;

 const Logo = styled.img.attrs({
    src: rateTheBandLogo,
    alt: 'Logo "Rate The Band"'
 })`
 height: 100%
 `;

 export function Header (){
    return (
        <Wrapper>
            <Logo />
        </Wrapper>
    )
 }
