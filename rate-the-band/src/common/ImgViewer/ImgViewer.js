import styled from 'styled-components';
import { HeadingTwo } from '../common-components/Tipografia/HeadingTwo';
import {
	BorderRadiuses,
	Colors,
} from '../shared/DesignTokens';
import background from '../assets/images/background.svg' 
import { Stars } from '../common-components/Stars/Stars';
import { Button } from '../common-components/Button/Button';
import { useBand, useAlbumSearch } from '../hooks/useBand';
import { useParams } from 'react-router';
import { HeadingFour } from '../common-components/Tipografia/HeadingFour';
import { HeadingFive } from '../common-components/Tipografia/HeadingFive';
import { AlbumsList } from '../common/AlbumsList/AlbumsList';
import { Preloader } from '../common/Preloader/Preloader';
import ScrollToTop from '../common/ScrollToTop/ScrollToTop';
import { useFormik } from 'formik';
import { SelectField, Option } from '../common-components/SelectField/SelectField';
import { Alert } from '../common-components/Alert/Alert';
import * as yup from 'yup';

const ImageContainer = styled.div`
  
    display: flex;
    justify-content: left;
    width:100%;
    @media (max-width: 900px) {
	justify-content: center;
    }
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
    }`

export function ImgViewer(bandImage) {



    return(
        <>
                  
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <ImageContainer>
                    <Image src={bandImage}/>
                    </ImageContainer>
                </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}