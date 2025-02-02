import React from 'react';
import { Grid, Typography, Box, useMediaQuery, useTheme } from '@mui/material';

const FONT_FAMILY_PRIMARY = 'PalanquinDark';
const FONT_FAMILY_SECONDARY = 'Jost-light-300';

export const AboutMe = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Box height={100} />
            <Grid container sx={{ minHeight: '600px' }}>
                <Grid item md={1} />
                <Grid item xs={12} md={5.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography fontFamily={FONT_FAMILY_PRIMARY} fontSize={isMobile ? 40 : 60}>
                            {`Hello I'm Prabhangini`}
                        </Typography>
                        <Typography fontFamily={FONT_FAMILY_PRIMARY} fontSize={isMobile ? 24 : 32}>
                            {`everyone calls me "Pb"`}
                        </Typography>
                        <br />

                        <Typography fontFamily={FONT_FAMILY_SECONDARY} fontSize={16} sx={{ wordSpacing: 3, textAlign: 'justify' }}>
                            {`I'm based in Toronto, but originally hail from the vibrant land of India. I love playful interaction design, minimalism, plants, happy dogs and care deeply about equality.`}
                        
                        <br />
                        <br />
                            {`I've had experience with many facets of design including- architecture, interior design, furniture, graphics, logos and illustrations. Now, as a multi-disciplinary designer, I've specialized in the digital world of UI/ UX design.`}
                      
                        <br />
                        <br />
                     
                            {`My work has a wide spectrum of designs ranging from friendly and accessible, to conceptual and up to high-end commercial and technological projects, always focusing on the user's needs and the business's success. My goal as a UI/ UX designer is to create a bridge between a product and its users. I design this bridge that has experiences and stories people can empathize and interact with.`}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={0.5} xs={0} />
                <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box 
                        component="img" 
                        src="./pb.svg" 
                        sx={{ 
                            width: isMobile ? '100%' : '80%',
                            maxHeight: '80%',
                            objectFit: 'contain'
                        }} 
                    />
                </Grid>
                <Grid item md={1} xs={0} />
            </Grid>
        </>
    );
}