
import { Grid, Container, Typography, Divider, List, ListItem, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';
import Airplane from '../component/Airplane';
import Square from '../component/Square';
import Rectangle from '../component/Rectangle';
import ReactPlayer from 'react-player';
export default () => {
    return (
        <>
            <Box height={30} />
            <Grid container>
                <Grid item md={1} />
                <Grid item md={10} sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                    <Typography fontFamily={'PalanquinDark'} fontSize={60}> AirWise </Typography>
                    <Typography fontFamily={'Jost'} fontSize={20}> Assisting Passengers at Airport </Typography>
                </Grid>
                <Grid item md={1} />
            </Grid>

            <Grid container>
                <Grid item md={2} />
                <Grid item md={8}>
                    <img src='/airwise.png' style={{ maxWidth: '100%' }} />
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
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        Whether you are a frequent traveller or stepping into an airport for the first time,
                        AirWise is a handy app which offers you flight status updates, interactive maps, and details about
                        facilities such as restrooms and food options. Additionally, you can find information about baggage claims and
                        security checkpoints. You can set reminders and get notifications. The app simplifies your travel experience
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
                <Grid item md={6} display={'flex'} flexDirection={'row'}>
                    <Box textAlign={'center'}>
                        <img src='/airwise/p1.svg' />
                        <Typography fontFamily={'Jost-300'} fontSize={14} color={'#414141'} lineHeight={2} mt={0.5}>
                            Struggle in Getting Directions at the Airport
                        </Typography>
                    </Box>
                    <Box ml={3} textAlign={'center'}>
                        <img src='/airwise/p2.svg' />
                        <Typography fontFamily={'Jost-300'} fontSize={14} color={'#414141'} lineHeight={2} mt={0.5}>
                            Difficulty to know the Accurate Flight Status
                        </Typography>
                    </Box>
                    <Box ml={3} textAlign={'center'}>
                        <img src='/airwise/p3.svg' />
                        <Typography fontFamily={'Jost-300'} fontSize={14} color={'#414141'} lineHeight={2}>
                            Challenges in finding assistance for different users
                        </Typography>
                    </Box>

                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2}>
                    <Typography fontFamily={'PalanquinDark'} fontSize={28}> Solutions </Typography>
                </Grid>
                <Grid item md={6} display={'flex'} flexDirection={'row'}>
                    <Box textAlign={'justify'} backgroundColor={'#E0E0E0'} padding={2}>
                        <Typography fontFamily={'Jost-300'} fontSize={14} color={'#414141'} lineHeight={2} mt={0.5}>
                            Providing intuitive maps, clear signages, and step by step directions at your fingertips to help you navigate seamlessly
                        </Typography>
                    </Box>
                    <Box ml={3} textAlign={'justify'} backgroundColor={'#E0E0E0'} padding={2}>
                        <Typography fontFamily={'Jost-300'} fontSize={14} color={'#414141'} lineHeight={2} mt={0.5}>
                            For accurate flight status, we offer real- time updates about flight delays, gate changes, and cancellations
                        </Typography>
                    </Box>
                    <Box ml={3} textAlign={'justify'} backgroundColor={'#E0E0E0'} padding={2}>
                        <Typography fontFamily={'Jost-300'} fontSize={14} color={'#414141'} lineHeight={2}>
                            Providing personalized and accessibility features such as choosing a preferred language, voice-guided navigation, etc
                        </Typography>
                    </Box>

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

            <Box height={50} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2} />
                <Grid item md={6}>
                    <Airplane noOfLeafsToBeRed={1} />
                </Grid>
                <Grid item md={2} />
            </Grid>


            <Box height={140} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2}>
                    <Typography fontFamily={'PalanquinDark'} fontSize={28}> User Interviews </Typography>
                </Grid>
                <Grid item md={6} sx={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        After conducting 5 empathy interviews, I gained valuable insight. I was grateful to have had
                        the opportunity to speak with a mother who was traveling with her children, a first-time traveler,
                        and some frequent travelers. A summary of my findings can be found below.
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
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        From these insights, two personas were generated to address the varying needs and desires of the
                        types of users. I carefully crafted interview questions to understand their pain points, preferences,
                        and expectations. Engaging in meaningful conversations, I listened attentively, observed non-verbal cues,
                        and recorded their valuable feedback.
                    </Typography>

                    <img src="/airwise/persona1.svg" style={{ maxWidth: '100%', marginTop: '15px' }} />
                    <img src="/airwise/persona2.svg" style={{ maxWidth: '100%', marginTop: '10px' }} />
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
                <Grid item md={2} />
                <Grid item md={6}>
                    <Airplane noOfLeafsToBeRed={2} />
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={140} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2}>
                    <Typography fontFamily={'PalanquinDark'} fontSize={28}> Information Architecture </Typography>
                </Grid>
                <Grid item md={6} sx={{ padding: '10px' }}>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}> I synthesized my research,
                        data, and analyses to create the architecture. When designing the information architecture and user flows, my main focus was on ensuring
                        that the overall structure is user-friendly. The terminology used is simple and easy to understand, making the process straightforward for
                        the user.
                    </Typography>

                    <img src="/airwise/ia1.svg" style={{ maxWidth: '100%', marginTop: '15px' }} />
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
                    <Typography fontFamily={'PalanquinDark'} fontSize={28}> User Flow </Typography>
                </Grid>
                <Grid item md={6} sx={{ padding: '10px' }}>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}> The different user
                        flows illustrate the various paths that can be followed to ultimately access the “Direction” feature and understand the
                        “Flight Details” easily.
                    </Typography>

                    <Typography fontFamily={'Jost-SemiBold'} fontSize={20} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        To get directions at Airport
                    </Typography>


                    <img src="/airwise/uf1.svg" style={{ maxWidth: '100%', marginTop: '15px' }} />

                    <Typography fontFamily={'Jost-SemiBold'} fontSize={20} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        To know Flight Status
                    </Typography>


                    <img src="/airwise/uf2.svg" style={{ maxWidth: '100%', marginTop: '15px' }} />
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
            <Box height={50} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2} />
                <Grid item md={6}>
                    <Airplane noOfLeafsToBeRed={3} />
                </Grid>
                <Grid item md={2} />
            </Grid>

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
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}> After
                        completing my research, I translated my findings into sketches. By sketching out the screens and interactions,
                        I could quickly iterate and refine the design based on the insights gained from the research.
                        These sketches served as a starting point for developing the user interface of the airport app.
                    </Typography>
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2} />
                <Grid item md={6}>
                    <img src="/airwise/wf1.svg" style={{ maxWidth: '100%', marginTop: '15px' }} />
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
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        I used Figma to convert my hand-drawn sketches into a digital format.
                        I focused on representing the various screens and functionalities of the app using visual elements
                        like buttons, menus, and placeholders. This allowed me to define the structure of the app, and user
                        interactions, ensuring a clear and intuitive design for the airport app's user interface.
                    </Typography>
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2} />
                <Grid item md={6} display={'flex'} flexDirection={'row'}>
                    <Box>
                        <Typography fontFamily={'Jost-SemiBold'} fontSize={20}> Flight Information</Typography>
                        <img src="/airwise/lf1.svg" style={{ width: '100%', marginTop: '15px' }} />
                    </Box>
                    <Box ml={3}>
                        <Typography fontFamily={'Jost-SemiBold'} fontSize={20}> General Boarding Pass </Typography>
                        <img src="/airwise/lf2.svg" style={{ width: '100%', marginTop: '15px' }} />
                    </Box>
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2} />
                <Grid item md={6} display={'flex'} flexDirection={'row'}>
                    <Box>
                        <Typography fontFamily={'Jost-SemiBold'} fontSize={20}> Airport Procedure </Typography>
                        <img src="/airwise/lf3.svg" style={{ width: '100%', marginTop: '15px' }} />
                    </Box>
                    <Box ml={6}>
                        <Typography fontFamily={'Jost-SemiBold'} fontSize={20}> Directions at Airport  </Typography>
                        <img src="/airwise/lf4.svg" style={{ width: '100%', marginTop: '15px' }} />
                    </Box>
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
                    <img src="/airwise/hifi1.svg" style={{ width: '23%', marginTop: '15px' }} />
                    <img src="/airwise/hifi2.svg" style={{ width: '23%', marginTop: '15px', marginLeft: '25px' }} />
                    <img src="/airwise/hifi3.svg" style={{ width: '23%', marginTop: '15px', marginLeft: '25px' }} />
                    <img src="/airwise/hifi4.svg" style={{ width: '23%', marginTop: '15px', marginLeft: '25px' }} />
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2} />
                <Grid item md={6} display={'flex'} flexDirection={'row'}>
                    <img src="/airwise/hifi5.svg" style={{ width: '23%', marginTop: '15px' }} />
                    <img src="/airwise/hifi6.svg" style={{ width: '23%', marginTop: '15px', marginLeft: '25px' }} />
                    <img src="/airwise/hifi7.svg" style={{ width: '23%', marginTop: '15px', marginLeft: '25px' }} />
                    <img src="/airwise/hifi8.svg" style={{ width: '23%', marginTop: '15px', marginLeft: '25px' }} />
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2}>
                    <Typography fontFamily={'Jost-SemiBold'} fontSize={'20px'}> UI Design </Typography>
                </Grid>
                <Grid item md={6} display={'flex'} flexDirection={'row'}>

                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography alignSelf={'center'} fontFamily={'Jost'}>
                                            Colors
                                        </Typography>
                                    </TableCell>
                                    <TableCell >

                                        <Box display={'flex'} flexDirection={'row'}>
                                            <Box ml={5}>
                                                <Square backgroundColor={'#366775'} />
                                            </Box>
                                            <Box ml={5}>
                                                <Square backgroundColor={'#D66D50'} />
                                            </Box>
                                            <Box ml={5}>
                                                <Square backgroundColor={'#CACACA'} />
                                            </Box>
                                            <Box ml={5}>
                                                <Square backgroundColor={'#F0F0F0'} />
                                            </Box>
                                        </Box>

                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography alignSelf={'center'} fontFamily={'Jost'}>
                                            Typography
                                        </Typography></TableCell>
                                    <TableCell>

                                        <Box display={'flex'} flexDirection={'row'}>
                                            <Rectangle fontFamily={"DM Serif Display"} fontSize={32} fontsUsedWhere={"Header"} />
                                            <Rectangle fontFamily={"Futura Md BT"} fontSize={24} fontsUsedWhere={"Sub Header"} />
                                            <Rectangle fontFamily={"Futura Bk BT"} fontSize={14} fontsUsedWhere={"Body"} />
                                        </Box>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography alignSelf={'center'} fontFamily={'Jost'}>Buttons
                                        </Typography></TableCell>
                                    <TableCell>
                                        <Box display={'flex'} flexDirection={'row'}>
                                            <Button variant="contained" sx={{
                                                backgroundColor: '#366775',
                                                '&:hover': {
                                                    backgroundColor: '#366775',
                                                }
                                            }}>
                                                Button 1
                                            </Button>
                                            <Button variant="contained" sx={{
                                                marginLeft: '10px', backgroundColor: "#D66D50", '&:hover': {
                                                    backgroundColor: '#D66D50',
                                                }
                                            }}>
                                                Button 2
                                            </Button>
                                        </Box>

                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
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

            <Box height={50} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2} />
                <Grid item md={6}>
                    <Airplane noOfLeafsToBeRed={4} />
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={150} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2}>
                    <Typography fontFamily={'Jost-SemiBold'} fontSize={'20px'}> Prototype </Typography>
                </Grid>
                <Grid item md={6} display={'flex'} flexDirection={'column'}>
                    <Container maxWidth="md">
                        <ReactPlayer
                            url="/airwise/AirWise.mp4"
                            width="100%"
                            controls
                        />
                    </Container>
                    <Box p={2} ml={1}>

                        <Link href="https://www.figma.com/proto/kJ1XYtSlfaA1sSkyahT2WJ/Brainstation_Airport-App?type=design&node-id=5830-447&t=6Bm5axVfUKWVZT5F-1&scaling=scale-down&page-id=5800:56&starting-point-node-id=5830:447&mode=design" 
                        underline="none">
                            Check out Figma Prototype
                        </Link>
                    </Box>
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2}>
                    <Typography fontFamily={'Jost-SemiBold'} fontSize={'20px'}> Learnings and Future Scope </Typography>
                </Grid>
                <Grid item md={6} display={'flex'} flexDirection={'row'}>

                    <List sx={{ listStyleType: 'decimal' }}>
                        <ListItem sx={{ display: 'list-item' }}>
                            <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                                The prototype of the app received a <Typography fontSize={14} component="span" fontWeight={'bold'} display="inline"> satisfaction score of 4.2, </Typography>which shows that it effectively met the users'
                                needs and provided a positive user experience. Additionally, multi-lingual support
                                was added to the AirWise app, making it more accessible and inclusive for users worldwide.
                                In the future, this project has the potential to include real-time airport services, partnerships with
                                airlines for smoother integration, and the integration of emerging technologies like AR to improve
                                navigation experiences.
                            </Typography>
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                                I thoroughly enjoyed the entire  <Typography fontSize={14} component="span" fontWeight={'bold'} display="inline"> design process. </Typography>
                                I gained knowledge in creating usability studies,
                                understanding the users, constructing empathy maps, creating wireframes, prototyping, and designing.
                            </Typography>
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                                <Typography fontSize={14} component="span" fontWeight={'bold'} display="inline"> When to stop</Typography> - which shows that it effectively met the users'
                                In the end, I understood that the design process is iterative.
                                While one may stop at a certain point, it doesn't mean the design is final forever.
                                It's a continuous learning process, and one can always iterate on their design in the future
                                based on user feedback.
                            </Typography>
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                                <Typography fontSize={14} component="span" fontWeight={'bold'} display="inline"> Learn to accept constructive criticism </Typography>
                                Through accepting and embracing feedback, I am able to learn from it, improve my skills, and achieve my goals.
                            </Typography>
                        </ListItem>

                    </List>
                </Grid>
                <Grid item md={2} />
            </Grid>


        </>
    )
}