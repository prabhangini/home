import React, { useState, useEffect, useRef } from 'react';
import { Grid, Typography, Box, Tabs, Tab, useMediaQuery, useTheme, IconButton, Fade } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TabContent from '../component/TabComponent';
import './Home.css';

const PRIMARY_COLOR = 'black';

export default () => {
    const [activeTab, setActiveTab] = useState('one');
    const [prevTab, setPrevTab] = useState('one');
    const [scrollPosition, setScrollPosition] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [showProjects, setShowProjects] = useState(false);

    const projectSectionRef = useRef(null); // Ref for the project section

    const handleChange = (event, newValue) => {
        setPrevTab(activeTab);
        setActiveTab(newValue);
    };

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);

        // Calculate the threshold based on the project section's position
        if (projectSectionRef.current) {
            const rect = projectSectionRef.current.getBoundingClientRect();
            if (rect.top <= window.innerHeight && !showProjects) {
                setShowProjects(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToBottom = () => {
        if (projectSectionRef.current) {
            projectSectionRef.current.scrollIntoView({ behavior: 'smooth' });
            setShowProjects(true);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const tabContents = {
        one: {
            images: ['./Arrivalease.png', './airwise.png', './Sapt/home.png'],
            texts: ['Arrival Ease', 'Airwise', 'Sapt'],
            moreImages: [],
            moreTexts: [],
            links: ['#/arrivalease', '#/airwise', '#/sapt'],
            moreLinks: []
        },
        two: {
            images: ['./3.png', './2.png', './1.png'],
            texts: ['Text for Image 1', 'Text for Image 2', 'Text for Image 3'],
            moreImages: ['./1.png', './2.png', './3.png'],
            moreTexts: ['Text for Image 1', 'Text for Image 2', 'Text for Image 3'],
            links: ['https://example.com/13', 'https://example.com/14', 'https://example.com/15'],
            moreLinks: ['https://example.com/16', 'https://example.com/17', 'https://example.com/18']
        },
        three: {
            images: ['./1.png', './2.png', './3.png'],
            texts: ['Text for Image 1', 'Text for Image 2', 'Text for Image 3'],
            moreImages: ['./1.png', './2.png', './3.png'],
            moreTexts: ['Text for Image 1', 'Text for Image 2', 'Text for Image 3'],
            links: ['https://example.com/13', 'https://example.com/14', 'https://example.com/15'],
            moreLinks: ['https://example.com/16', 'https://example.com/17', 'https://example.com/18']
        }
    };

    return (
        <>
            <Box height={150} />
            <Grid container>
                <Grid item xs={12} md={3} />
                <Grid item xs={12} md={6}>
                    <Typography fontFamily={"product-sans"} fontSize={isMobile ? 30 : 50}>
                        {`Hi there`} <span class="wave">👋</span>,
                    </Typography>
                    <Typography fontFamily={"product-sans"} fontSize={isMobile ? 20 : 24}>
                        {`I'm Prabhangini (PB), a passionate designer dedicated to transforming the world through vibrant and innovative designs`}
                    </Typography>
                    <br />
                </Grid>
                <Grid item xs={0} md={3} />
            </Grid>

            <Box height={150} />

            <Grid container justifyContent="center" mt={2}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <IconButton
                        onClick={scrollPosition > 100 ? scrollToTop : scrollToBottom}
                        sx={{
                            animation: scrollPosition > 100 ? 'none' : 'bounce 2s infinite',
                            '@keyframes bounce': {
                                '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
                                '40%': { transform: 'translateY(-10px)' },
                                '60%': { transform: 'translateY(-5px)' },
                            }
                        }}
                    >
                        {scrollPosition > 100 ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                    </IconButton>
                    <Typography variant="h6" fontFamily={"product-sans"}>
                        {scrollPosition > 100 ? 'Back to Top' : 'Scroll Down'}
                    </Typography>
                </Box>
            </Grid>

            <Box height={50} />
            <Fade in={showProjects} timeout={500}>
                <Grid container mt={5} ref={projectSectionRef}>
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={8} sx={{ margin: '0 auto' }}>
                        <Box sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                            <Tabs
                                value={activeTab}
                                onChange={handleChange}
                                textColor="primary"
                                indicatorColor="primary"
                                aria-label="secondary tabs example"
                                sx={{
                                    '& .MuiTabs-flexContainer': {
                                        justifyContent: 'center'
                                    },
                                    '& .MuiTab-root': {
                                        flex: 1, // Ensures each Tab takes up equal space
                                        fontSize: '1.2rem', // Increase the size of the tab labels
                                        fontFamily: 'product-sans', // Change the font family
                                        padding: '12px 24px', // Adjust the padding to increase the tab size
                                        transition: 'all 0.3s ease', // Smooth transition for hover and selection effects
                                        '&:hover': {
                                            color: '#ff5722', // Change text color on hover
                                        }
                                    },
                                    '& .MuiTab-textColorPrimary': {
                                        color: PRIMARY_COLOR, // Change the color of the tab text
                                    },
                                    '& .Mui-selected': {
                                        fontFamily: 'Jost-light-300', // Change the font family of the selected tab
                                        background: 'linear-gradient(90deg, rgba(255,0,150,1) 0%, rgba(0,204,255,1) 100%)', // Gradient background
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent', // Apply gradient text
                                        transform: 'scale(1.1)', // Slightly scale up the selected tab
                                        position: 'relative',
                                        '&:after': {
                                            content: '""',
                                            position: 'absolute',
                                            width: '100%',
                                            height: '3px',
                                            backgroundColor: '#ff5722',
                                            bottom: 0,
                                            left: 0,
                                            animation: 'underline 0.3s ease-in-out',
                                        },
                                    },
                                    '@keyframes underline': {
                                        '0%': { width: '0%' },
                                        '100%': { width: '100%' },
                                    }
                                }}
                            >
                                <Tab disableRipple value="one" label="Featured Projects" sx={{ textTransform: 'none' }} />
                                <Tab disableRipple value="two" label="UI/UX Projects" sx={{ textTransform: 'none' }} />
                                <Tab disableRipple value="three" label="Graphic Designs" sx={{ textTransform: 'none' }} />
                            </Tabs>
                        </Box>

                        <Box sx={{ pt: 2, maxWidth: '100%', overflowX: 'hidden', justifyContent: "center", alignItems: "center" }}>
                            <Fade in={activeTab === 'one'} timeout={500} key="one">
                                <div>
                                    {activeTab === 'one' && <TabContent tabContent={tabContents.one} sx={{ maxWidth: '100%' }} />}
                                </div>
                            </Fade>
                            <Fade in={activeTab === 'two'} timeout={500} key="two">
                                <div>
                                    {activeTab === 'two' && <TabContent tabContent={tabContents.two} sx={{ maxWidth: '100%' }} />}
                                </div>
                            </Fade>
                            <Fade in={activeTab === 'three'} timeout={500} key="three">
                                <div>
                                    {activeTab === 'three' && <TabContent tabContent={tabContents.three} sx={{ maxWidth: '100%' }} />}
                                </div>
                            </Fade>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} />
                </Grid>
            </Fade>
        </>
    );
}
