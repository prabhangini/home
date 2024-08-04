import React, { useState } from 'react';
import { Button, Grid, Typography, styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const images = [
    '../1.png',
    '../2.png',
    '../3.png'
];

const CarouselContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    position: 'relative',
});

const ImageContainer = styled('div')({
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
});

const BlurredImage = styled('img')({
    filter: 'blur(5px)',
    transition: 'filter 0.5s ease',
    maxWidth: '80%',
});

const MainImage = styled('img')({
    width: '100%',
    transition: 'transform 0.5s ease',
    zIndex: 1,
});

const Skills = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            console.log(prevIndex);
            return (prevIndex === 0 ? images.length - 1 : prevIndex - 1);
        });
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <Grid container>
                <Grid item md={2} />

                <Grid item md={1} sx={{textAlign: 'center'}}>
                    <ArrowBackIcon fontSize="large" sx={{mt: 3, cursor: 'pointer'}}  onClick={handlePrev}/>
                </Grid>


                <Grid item md={6} sx={{ textAlign: 'center'}}>
                    <Typography fontFamily={'PalanquinDark'} fontSize={50}>
                        How I can add value
                    </Typography>

                </Grid>

                <Grid item md={1} sx={{textAlign: 'center'}}>
                    <ArrowForwardIcon fontSize="large" sx={{mt: 3, cursor: 'pointer'}}  onClick={handleNext} />
                </Grid>

                <Grid item md={2} />

            </Grid>
            <CarouselContainer>
                <ImageContainer>
                    <BlurredImage src={images[currentIndex === 0 ? images.length - 1 : currentIndex - 1]} alt="previous" sx={{ mt: 15 }} />
                    <MainImage src={images[currentIndex]} alt="main" />
                    <BlurredImage src={images[currentIndex === images.length - 1 ? 0 : currentIndex + 1]} alt="next" sx={{ mt: 15 }} />
                </ImageContainer>
            </CarouselContainer>
        </>
    );
};

export default Skills;
