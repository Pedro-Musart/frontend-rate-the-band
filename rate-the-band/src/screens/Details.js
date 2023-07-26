import React from 'react';
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

const Background = styled.div`
    justify-content: center;
    width: 100%;
    height: 200px; 
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


export function Details() {


	const { id } = useParams();
	const { band, isLoading, setBandAvaliation, getBandAvaliation } = useBand(id);
    const [isSubmitted, setIsSubmitted] = React.useState(false);


    const formik = useFormik({
        initialValues: getBandAvaliation(id) || { avaliation: '' },
		validationSchema: yup.object().shape({
			avaliation: yup.string().required(),
		}),
		onSubmit: (values) => {
			const bandAvaliation = { id, avaliation: values.avaliation };
			setBandAvaliation(bandAvaliation);
            setIsSubmitted(true);
            setTimeout(() => {
                handleCloseAlert();
              }, 6000);

		},
	});

      const handleCloseAlert = () => {
    setIsSubmitted(false);
  };
    

  
    return (
        <>
        <ScrollToTop></ScrollToTop>
        <Preloader/>
        <div>
            <Background src={background}/> 
           
            
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
                    {getBandAvaliation(id) != null ? (
                        <Stars number={getBandAvaliation(id).avaliation}  />
                    ) : (
                        <Stars number={0}  />
                    )}
                
                </StarBox>

                <div>
                <form onSubmit={formik.handleSubmit} noValidate> 
		<div>
			<SelectField 
                className='mb-4'
                name="avaliation"
                onChange={formik.handleChange}
                value={formik.values.avaliation}
                required
            >
                    <Option value="" disabled> Selecione a nota</Option>
                    <Option>5</Option>
                    <Option>4</Option>
                    <Option>3</Option>
                    <Option>2</Option>
                    <Option>1</Option>
			</SelectField>
			<div >
				<Button type="submit">Avaliar</Button>
                
			</div>
            
            {formik.errors.avaliation && (
                
                    <Alert type="error">
                        Escolha uma nota para ser atribuída
                    </Alert>
            )
            }

            
            {isSubmitted  && (
                

                <Alert type="success">
                    {console.log(formik)}
                    Nota atribuída com sucesso!
                </Alert>
            )
            }

            {formik.errors.avaliation && (
                            
                    <Alert type="error">
                        {console.log(formik)}
                        Escolha uma nota para ser atribuída
                    </Alert>
            )
            }
                        

		</div>
	</form>
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

        {!isLoading && (
            <>
             <AlbumsList name={band.name} id={id}>
            </AlbumsList>
            </>
        )}
       
          

            
        </>
    )
}