import { HeadingOne } from '../common-components/Tipografia/HeadingOne';
import error from '../assets/images/404-error.svg'
import styled from 'styled-components';

const Error404 = styled.img.attrs({
    src: error,
  })`
    width: 40%;
  `;

export function NotFound() {
    return(
        <>
        <div className='d-flex flex-column align-items-center mb-5'>
       <HeadingOne className='mb-4'>Página não encontrada.</HeadingOne>
       <Error404></Error404>
       </div>
       </>    
    )
    
}