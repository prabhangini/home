import React, { useState } from 'react';
import { Grid, Typography, Button, Box, Tabs, Tab, Link } from '@mui/material';
import TabContent from '../component/TabComponent';

const FONT_FAMILY_PRIMARY = 'PalanquinDark';
const FONT_FAMILY_SECONDARY = 'Jost-light-300';
const PRIMARY_COLOR = 'black';
const BACKGROUND_COLOR = '#E0E0E0';

export const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('one');

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const tabContents = {
        one: {
            images: ['../1.png', '../2.png', '../3.png'],
            texts: ['Text for Image 1', 'Text for Image 2', 'Text for Image 3'],
            moreImages: ['../1.png', '../2.png', '../3.png'],
            moreTexts: ['Text for Image 1', 'Text for Image 2', 'Text for Image 3'],
            links: ['https://example.com/13', 'https://example.com/14', 'https://example.com/15'],
            moreLinks: ['https://example.com/16', 'https://example.com/17', 'https://example.com/18']
        },
        two: {
            images: ['../3.png', '../2.png', '../1.png'],
            texts: ['Text for Image 1', 'Text for Image 2', 'Text for Image 3'],
            moreImages: ['../1.png', '../2.png', '../3.png'],
            moreTexts: ['Text for Image 1', 'Text for Image 2', 'Text for Image 3'],
            links: ['https://example.com/13', 'https://example.com/14', 'https://example.com/15'],
            moreLinks: ['https://example.com/16', 'https://example.com/17', 'https://example.com/18']
        },
        three: {
            images: ['../1.png', '../2.png', '../3.png'],
            texts: ['Text for Image 1', 'Text for Image 2', 'Text for Image 3'],
            moreImages: ['../1.png', '../2.png', '../3.png'],
            moreTexts: ['Text for Image 1', 'Text for Image 2', 'Text for Image 3'],
            links: ['https://example.com/13', 'https://example.com/14', 'https://example.com/15'],
            moreLinks: ['https://example.com/16', 'https://example.com/17', 'https://example.com/18']
        }
    };

    return (
        <>
            <Box height={100} />
            <Grid container>
                <Grid item md={1} />
                <Grid item md={5.5}>
                    <Typography fontFamily={FONT_FAMILY_PRIMARY} fontSize={60}>
                        {`Hello I’m Prabhangini`}
                    </Typography>
                    <Typography fontFamily={FONT_FAMILY_PRIMARY} fontSize={32}>
                        {`everyone calls me “Pb”`}
                    </Typography>
                    <br />

                    <Typography fontFamily={FONT_FAMILY_SECONDARY} fontSize={16} sx={{ wordSpacing: 3, textAlign: 'justify' }}>
                        {
                            `I’m based in Toronto, but originally hail from the vibrant land of India. I love playful interaction design, minimalism, plants, happy dogs and care deeply about equality.`
                        }
                    </Typography>

                    <br />
                    <Typography fontFamily={FONT_FAMILY_SECONDARY} fontSize={16} sx={{ wordSpacing: 3, textAlign: 'justify' }}>
                        {
                            `I’ve had experience with many facets of design including- architecture, interior design, furniture, graphics, logos and illustrations. Now, as a multi-disciplinary designer, I’ve specialized in the digital world of UI/ UX design.`
                        }
                    </Typography>
                    {/* <br />
                    <Typography fontFamily={FONT_FAMILY_SECONDARY} fontSize={16} sx={{ wordSpacing: 3, textAlign: 'justify' }}>
                        {
                            `My work has a wide spectrum of designs ranging from friendly and accessible, to conceptual and up to high-end commercial and technological projects, always focusing on the user's needs and the business's success. My goal as a UI/ UX designer is to create a bridge between a product and its users. I design this bridge that has experiences and stories people can empathize and interact with.`
                        }
                    </Typography> */}

                    <Button
                        variant="contained"
                        sx={{
                            textTransform: 'none',
                            backgroundColor: PRIMARY_COLOR,
                            "&:hover": {
                                backgroundColor: PRIMARY_COLOR
                            },
                            mt: '10px'
                        }}
                    >
                        Download Resume
                    </Button>
                </Grid>
                <Grid item md={0.5} xs={0} />
                <Grid item md={4} xs={12} display="flex" justifyContent="center" alignItems="center">
                    <Box component="img" src="../pb.svg" sx={{ maxWidth: '100%' }} />
                </Grid>
                <Grid item md={1} xs={0} />
            </Grid>
        </>
    );
}
