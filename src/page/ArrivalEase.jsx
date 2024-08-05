
import React from 'react';
import { Grid, CardContent, Typography, Divider, List, ListItem, Button, Box } from '@mui/material';
import HorizontalTube from '../component/Tube';
export default () => {
    return (
        <>
            <Box height={30} />
            <Grid container>
                <Grid item md={1} />
                <Grid item md={10} sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                    <Typography fontFamily={'PalanquinDark'} fontSize={60}> Arrival Ease </Typography>
                    <Typography fontFamily={'Jost'} fontSize={20}> Services for Newcomers to Canada </Typography>
                </Grid>
                <Grid item md={1} />
            </Grid>

            <Grid container>
                <Grid item md={2} />
                <Grid item md={8}>
                    <img src='./arrival-hero.svg' style={{ maxWidth: '100%' }} />
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2}>
                    <Typography fontFamily={'PalanquinDark'} fontSize={28}> Overview </Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}> When coming to Canada, new immigrants encounter daunting obstacles during the pre-arrival phase.
                        To address these challenges, a centralized platform is necessary to offer crucial information and assistance to help newcomers navigate
                        through the immigration process, comprehend Canadian culture, enroll in language training, find suitable housing, manage finances, and establish social connections.
                    </Typography>
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2}>
                    <Typography fontFamily={'PalanquinDark'} fontSize={28}> The Problem </Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}> New immigrants encounter numerous obstacles before arrival,
                        from immigration procedures, language training, housing, finances, and social integration
                        <br />
                        Centralized resources and support services are lacking
                    </Typography>
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2}>
                    <Typography fontFamily={'PalanquinDark'} fontSize={28}> Solutions </Typography>
                </Grid>
                <Grid item md={6} sx={{ backgroundColor: '#E0E0E0', padding: '10px' }}>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}> "ArrivalEase" is a platform designed for the social good to assist newcomers and refugees
                        in Canada with pre-arrival and settlement processes. The platform offers a user-friendly mobile app that provides essential information, personalized tools,
                        and resources to ensure a smooth transition and successful settlement for all.
                    </Typography>
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />

            <Grid container>
                <Grid item md={2} />
                <Grid item md={8}>
                    <Divider />
                </Grid>
                <Grid item md={2} />
            </Grid>

            {/* <Box height={50} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2} />
                <Grid item md={6}>
                    <HorizontalTube noOfLeafsToBeRed={1} />
                </Grid>
                <Grid item md={2} />
            </Grid> */}


            <Box height={140} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2}>
                    <Typography fontFamily={'PalanquinDark'} fontSize={28}> User Interviews </Typography>
                </Grid>
                <Grid item md={6} sx={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}> During the research phase,
                        a structured interview guide was developed to cover a range of topics related to pre-arrival services and
                        settlement in Canada. Open-ended questions were used to encourage participants to share their experiences
                        and provide detailed feedback. The interviews provided valuable qualitative data, revealing user emotions,
                        and specific challenges, which helped in identifying key areas for improvement in the pre-arrival services
                        app.
                        <br />
                        <br />
                        For example, Maria faces challenges in navigating the job market, finding suitable housing, and
                        building a professional network. These obstacles hinder her successful settlement and integration into Canadian society.
                    </Typography>

                    <br />
                    <br />

                    <Typography fontFamily={'Jost'} fontSize={20} textAlign={'justify'}> Insights
                    </Typography>

                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        <List sx={{ listStyleType: 'disc' }}>
                            <ListItem sx={{ display: 'list-item' }}>
                                Most users shared that they have to arrive early at departure and tendency to reconfirm with the staff regarding the next checkpoint direction to avoid going the wrong way.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item' }}>
                                If flights get delayed they are not sure about what to do at the airport during the waiting hours.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item' }}>
                                Solo travelers said there are long queues and confusion at the counters during the festive season or peak hours. They would prefer automated systems at airports to deal less with fewer people and avoid congestion.
                            </ListItem>
                        </List>
                    </Typography>
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2}>
                    <Typography fontFamily={'PalanquinDark'} fontSize={28}> Personas </Typography>
                </Grid>
                <Grid item md={6} sx={{ padding: '10px' }}>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}> From these insights,
                        two personas were generated to address the varying needs and desires of the types of users.
                        I carefully crafted interview questions to understand their pain points, preferences, and expectations.
                        Engaging in meaningful conversations, I listened attentively, observed non-verbal cues, and recorded
                        their valuable feedback.
                    </Typography>

                    <img src="./persona1.svg" style={{ maxWidth: '100%', marginTop: '15px' }} />
                    <img src="./persona2.svg" style={{ maxWidth: '100%', marginTop: '10px' }} />
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2}>
                    <Typography fontFamily={'PalanquinDark'} fontSize={28}> Affinity Diagram </Typography>
                </Grid>
                <Grid item md={6} sx={{ padding: '10px' }}>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}> During the affinity mapping,
                        I transferred each observation onto individual sticky notes and then grouped them based on common themes
                        and patterns. Through this, I was able to uncover important insights, prioritize design decisions,
                        and identify key areas for improvement.
                    </Typography>

                    <img src="./ad.svg" style={{ maxWidth: '100%', marginTop: '15px' }} />
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Grid container>
                <Grid item md={2} />
                <Grid item md={8}>
                    <Divider />
                </Grid>
                <Grid item md={2} />
            </Grid>

            {/* <Box height={50} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2} />
                <Grid item md={6}>
                    <HorizontalTube noOfLeafsToBeRed={3} />
                </Grid>
                <Grid item md={2} />
            </Grid> */}

            <Box height={140} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2}>
                    <Typography fontFamily={'PalanquinDark'} fontSize={28}> Wireframes </Typography>
                </Grid>
                <Grid item md={6} />
                <Grid item md={2} />
            </Grid>


            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2}>
                    <Typography fontFamily={'Jost-SemiBold'} fontSize={20}> Paper Wireframes </Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}> I started with my initial
                        ideas and created wireframes, then move on to mockups before finally creating a high-fidelity prototype.
                        This approach effectively addresses the user's needs as demonstrated in this simplified version.
                    </Typography>
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2} />
                <Grid item md={6}>
                    <img src="./wf1.svg" style={{ maxWidth: '100%', marginTop: '15px' }} />
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2}>
                    <Typography fontFamily={'Jost-SemiBold'} fontSize={'20px'}> Lo-Fi Wireframes </Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}> I used Figma to convert my
                        hand-drawn sketches into a digital format. I focused on representing the various screens and functionalities
                        of the app using visual elements like buttons, menus, and placeholders.
                        This allowed me to define the structure of the app, and user interactions, ensuring a clear and
                        intuitive design for the airport app's user interface.
                    </Typography>
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2} />
                <Grid item md={6} display={'flex'} flexDirection={'row'}>
                    <img src="./lofi1.svg" style={{ width: '31%', marginTop: '15px' }} />
                    <img src="./lofi2.svg" style={{ width: '31%', marginTop: '15px', marginLeft: '25px' }} />
                    <img src="./lofi3.svg" style={{ width: '31%', marginTop: '15px', marginLeft: '25px' }} />
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2} />
                <Grid item md={6} display={'flex'} flexDirection={'row'}>
                    <img src="./lofi4.svg" style={{ width: '31%', marginTop: '15px' }} />
                    <img src="./lofi5.svg" style={{ width: '31%', marginTop: '15px', marginLeft: '25px' }} />
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2} />
                <Grid item md={6} display={'flex'} flexDirection={'row'}>
                    <img src="./lofi6.svg" style={{ width: '31%', marginTop: '15px' }} />
                    <img src="./lofi7.svg" style={{ width: '31%', marginTop: '15px', marginLeft: '25px' }} />
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={8}>
                    <Divider />
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2}>
                    <Typography fontFamily={'Jost-SemiBold'} fontSize={'20px'}> Hi-Fi Wireframes </Typography>
                </Grid>
                <Grid item md={6} display={'flex'} flexDirection={'row'}>
                    <img src="./hifi1.svg" style={{ width: '23%', marginTop: '15px' }} />
                    <img src="./hifi2.svg" style={{ width: '23%', marginTop: '15px', marginLeft: '25px' }} />
                    <img src="./hifi3.svg" style={{ width: '23%', marginTop: '15px' }} />
                    <img src="./hifi4.svg" style={{ width: '23%', marginTop: '15px', marginLeft: '25px' }} />
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2} />
                <Grid item md={6} display={'flex'} flexDirection={'row'}>
                    <img src="./hifi5.svg" style={{ width: '23%', marginTop: '15px' }} />
                    <img src="./hifi6.svg" style={{ width: '23%', marginTop: '15px', marginLeft: '25px' }} />
                    <img src="./hifi7.svg" style={{ width: '23%', marginTop: '15px' }} />
                    <img src="./hifi8.svg" style={{ width: '23%', marginTop: '15px', marginLeft: '25px' }} />
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2}>
                    <Typography fontFamily={'Jost-SemiBold'} fontSize={'20px'}> Responsive Design </Typography>
                </Grid>
                <Grid item md={6} display={'flex'} flexDirection={'row'}>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}> I have customized the designs
                        to fulfil the specific requirements of each user, taking into account their device type and screen dimensions.
                    </Typography>
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Grid container>
                <Grid item md={2} />
                <Grid item md={2} />
                <Grid item md={6} display={'flex'} flexDirection={'row'}>
                    <img src="./rd1.svg" style={{ width: '15%', marginTop: '15px' }} />
                    <img src="./rd2.svg" style={{ width: '30%', marginTop: '15px', marginLeft: '25px' }} />
                    <img src="./rd3.svg" style={{ width: '50%', marginTop: '15px', marginLeft: '25px' }} />
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={8}>
                    <Divider />
                </Grid>
                <Grid item md={2} />
            </Grid>

            {/* <Box height={50} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2} />
                <Grid item md={6}>
                    <HorizontalTube noOfLeafsToBeRed={4} />
                </Grid>
                <Grid item md={2} />
            </Grid> */}

            <Box height={50} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2}>
                    <Typography fontFamily={'Jost-SemiBold'} fontSize={'20px'}> Learnings and Future Scope </Typography>
                </Grid>
                <Grid item md={6}>
                            <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                                <ul>
                                    <li>
                                Conducted user experience research with a diverse group of 10 participants to gather qualitative data and
                                valuable insights for the app. The prototype led to a 55% increase in newcomers' sense of preparedness
                                for their settlement journey. 85% of users expressed a strong intent to use the platform, indicating a
                                high demand for such a centralized tool among newcomers.
                                </li>
                                </ul>
                            </Typography>
                            <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                            <ul>
                            <li>
                                Through a deep understanding of the needs and challenges faced by our target audience, I have successfully
                                created a platform that skillfully addresses their concerns. Moreover, I have gained valuable insights into
                                the hopes and struggles of immigrants and refugees, and how technology can greatly contribute to their
                                integration and improve their settlement experiences.
                                </li>
                                </ul>
                            </Typography>
                </Grid>
                <Grid item md={2} />
            </Grid>


        </>
    )
}