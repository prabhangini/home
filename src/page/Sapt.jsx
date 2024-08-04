
import { Grid, CardContent, Typography, Divider, List, ListItem, Button, Box } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function createData(criteria, agencyA, agencyB, agencyC) {
    return { criteria, agencyA, agencyB, agencyC };
}

const rows = [
    createData('User Experience (UX)', 'Engaging homepage, overuse of animations', 'Clean design, limited interactive elements', 'User-friendly design, outdated visuals'),
    createData('Visual Design', 'Bold colors, high-quality visuals, cluttered sections', 'Elegant design, effective typography, sparse pages', 'Functional design, consistent branding, lack engagement'),
    createData('Content and Messaging', 'Clear value proposition, persuasive copy, lengthy content', 'Concise messaging, well-organized content, lack details', 'Detailed content, strong focus on benefits, too technical'),
    createData('Navigation and Usability', 'Intuitive navigation, confusing interactive elements', 'Straightforward navigation, clear labels, no search', 'Highly usable, clear categorization, outdated navigation'),
    createData('Performance and Responsiveness', 'Fast loading, smooth performance, occasional slowdowns', 'Excellent performance, minimalist design, static content', 'Reliable performance, responsive design, limited multimedia')
];

export default () => {
    return (
        <>
            <Box height={30} />
            <Grid container>
                <Grid item md={1} />
                <Grid item md={10} sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                    <Typography fontFamily={'PalanquinDark'} fontSize={60}> Sapt </Typography>
                </Grid>
                <Grid item md={1} />
            </Grid>

            <Grid container>
                <Grid item md={2} />
                <Grid item md={3} pr={10}>
                <Typography fontFamily={'Jost-bold'} component="span">Project type:</Typography> 
                <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        End to end website design for an upcoming software company
                    </Typography>
                    <Typography fontFamily={'Jost-bold'} component="span" fontWeight="bold" >My Role:</Typography>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                         UX Designer/ Brand Designer
                    </Typography>
                    <Typography fontFamily={'Jost-bold'} component="span" fontWeight="bold">Duration:</Typography>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                         6 months
                    </Typography>
                    <Typography fontFamily={'Jost-bold'} component="span" fontWeight="bold">Team:</Typography> 
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        [Mention if you collaborated with others]
                    </Typography>
                </Grid>
                <Grid item md={5}>
                    <img src='./arrival-hero.svg' style={{ maxWidth: '100%' }} />
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={2}>
                    <Typography fontFamily={'Jost-bold'} fontSize={22}> Overview </Typography>
                </Grid>
                <Grid item md={6}>
                    
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={1}>
                    <Typography fontFamily={'Jost-bold'} fontSize={22}> Setting the Scene </Typography>
                </Grid>
                <Grid item md={1} />
                <Grid item md={6}>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                    When I met Ankit and Hemant, founders of the newly formed Sapt Solutions, 
                    they had innovative ideas but no digital presence. They needed a website with a strong brand identity 
                    in a competitive market. The project was challenging due to their different visions: one wanted a bold, 
                    attention-grabbing site, while the other preferred a simple, elegant approach focused on usability. 
                    Balancing these contrasting ideas and achieving a cohesive design was the biggest challenge.

                    </Typography>
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={30} />
            <Grid container>
                <Grid item md={2} />
                <Grid item md={1}>
                    <Typography fontFamily={'Jost-bold'} fontSize={22}> Understanding the Challenge </Typography>
                </Grid>
                <Grid item md={1} />
                <Grid item md={2} sx={{ backgroundColor: '#FFFFFF', padding: '10px' }}>
                    <img src='./Sapt/challenges.png' style={{ maxWidth: '100%' }} />
                </Grid>
                <Grid item md={4} sx={{ backgroundColor: '#E0E0E0', ml: 2, pr: 5 }}>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        <ul>
                            <li>The challenges were more in responsiveness because it had to work equally well on all devices and screen sizes.</li>
                            <li>As both of the founder's perspectives in terms of design were poles apart, it was difficult to keep aligned.</li>
                            <li>“Products” and “Our Work” navigation links seemed to be the same thing. Wouldn’t the company’s products be classified as their work?</li>
                            <li>Their brand story was untold. There was a lack of UI and design systems. My task was to translate their vision into a digital experience that would make them stand out in a crowded market.</li>
                        </ul>
                    </Typography>
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={50} />

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
                <Grid item md={1}>
                    <Typography fontFamily={'Jost-bold'} fontSize={22}> The Journey Begins </Typography>
                </Grid>
                <Grid item md={1} />
                <Grid item md={6}>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        I pictured myself as the CEO of the startup and I made my brain think in the context of if I want to grow and gauge audience attention what can I do?
                        <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2} mt={1}>
                            <Typography fontFamily={'Jost-bold'} component="span">Research and Insights </Typography>
                            My journey began with understanding the heart of Sapt Solutions.
                            I conducted interviews and surveys with potential users to uncover their needs, preferences, and pain points.
                            I also delved into competitor analysis, identifying opportunities for Sapt to differentiate itself.
                        </Typography>
                    </Typography>
                    <Grid item md={12} sx={{ textAlign: 'center', mt: 1 }}>
                        <img src='./Sapt/research.png' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </Grid>

                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2} mt={1}>
                        <Typography fontFamily={'Jost-bold'} component="span">Crafting the Blueprint </Typography>
                        Armed with these insights, I moved to the drawing board.
                        The first step was to create wireframes that mapped out the website's structure.
                        These wireframes served as the skeleton upon which the Sapt Solutions story would be built.
                    </Typography>

                    <Grid item md={12} sx={{ textAlign: 'center', mt: 1 }}>
                        <img src='./Sapt/research.png' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </Grid>

                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={50} />

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
                <Grid item md={1}>
                    <Typography fontFamily={'Jost-bold'} fontSize={22}> Research and Planning </Typography>
                </Grid>
                <Grid item md={1} />
                <Grid item md={6}>
                    <Typography fontFamily={'Jost-bold'} fontSize={18} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        Competitive Analysis:
                    </Typography>
                    <Grid item md={12} sx={{ textAlign: 'center', mt: 1 }}>
                        <img src='./Sapt/comp_analysis.png' style={{ maxWidth: '100%' }} />
                    </Grid>

                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2} mt={1}>
                        These analyses of the websites of the agencies were very useful for the design of the Sapt Solutions website.
                        Examining what the competition does well and where it really falls short, we designed for Sapt Solutions a balanced and competitive digital presence.
                    </Typography>

                    <br />

                    <TableContainer component={Paper} >
                        <Table sx={{ minWidth: 650 }} aria-label="comparison table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Criteria</TableCell>
                                    <TableCell align="left" sx={{ backgroundColor: '#FFD700' }}>Agency A</TableCell>
                                    <TableCell align="left" sx={{ backgroundColor: '#98FB98' }}>Agency B</TableCell>
                                    <TableCell align="left" sx={{ backgroundColor: '#AFEEEE' }}>Agency C</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.criteria}>
                                        <TableCell component="th" scope="row">
                                            {row.criteria}
                                        </TableCell>
                                        <TableCell align="left">{row.agencyA}</TableCell>
                                        <TableCell align="left">{row.agencyB}</TableCell>
                                        <TableCell align="left">{row.agencyC}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Grid item md={12} sx={{ textAlign: 'center', mt: 2 }}>
                        <img src='./Sapt/chart.png' style={{ maxWidth: '100%' }} />
                    </Grid>

                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={20}/>

            <Grid container>
                <Grid item md={2} />
                <Grid item md={1}>
                    <Typography fontFamily={'Jost-bold'} fontSize={22}> Overcoming Obstacles </Typography>
                </Grid>
                <Grid item md={1} />
                <Grid item md={6}>
                    <Grid item md={12} sx={{ textAlign: 'center', mt: 1 }}>
                        <img src='./Sapt/obstacle.png' style={{ maxWidth: '100%' }} />
                    </Grid>

                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2} mt={1}>
                        The road to a seamless user experience is rarely smooth. During the prototyping phase, usability testing revealed several areas for improvement.
                        Users struggled with navigation and found some elements confusing. These insights were invaluable, prompting iterative changes that refined the design.
                    </Typography>

                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={50} />

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
                <Grid item md={1}>
                    <Typography fontFamily={'Jost-bold'} fontSize={22}> Designing the Experience </Typography>
                </Grid>
                <Grid item md={1} />
                <Grid item md={6}>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        <Typography fontFamily={'Jost-bold'} component="span">Prototyping and User Testing:</Typography> Creating interactive prototypes was a crucial step in the design process.
                        These prototypes allowed us to simulate user interactions and gather valuable feedback. Usability testing sessions revealed several areas for improvement,
                        such as navigation clarity and content organization. Based on this feedback, I made iterative changes to refine the user experience.
                    </Typography>
                    <br />
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        <Typography fontFamily={'Jost-bold'} component="span" fontWeight="bold">Responsive Design:</Typography> Understanding the importance of accessibility,
                        I ensured that the website was fully responsive. This meant that users could enjoy a seamless experience across all devices,
                        whether they were browsing on a desktop, tablet, or smartphone.
                    </Typography>
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={20}/>

            <Grid container>
                <Grid item md={2} />
                <Grid item md={1}>
                    <Typography fontFamily={'Jost-bold'} fontSize={22}> Key Features </Typography>
                </Grid>
                <Grid item md={1} />
                <Grid item md={6} sx={{ backgroundColor: '#E0E0E0', p: 2}}>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        <Typography fontFamily={'Jost-bold'} component="span">Responsive Design Implementation:</Typography> The use of fixed grid layouts, SVGs, 
                        and media queries ensured that the website would work consistently and at the best performance on all devices and screen sizes.
                    </Typography>
                    <br />
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        <Typography fontFamily={'Jost-bold'} component="span" fontWeight="bold">Unified Design System:</Typography> An all-in-one design system with a style guide specifying color schemes, 
                        typography, and UI components for consistency and concurrence between the different design perspectives of the founders
                    </Typography>
                    <br />
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        <Typography fontFamily={'Jost-bold'} component="span">Clear information architecture:</Typography> The navigation structure has been redesigned by collapsing 
                        "Products" and "Our Work" into one clearly labelled section. This clearly labelled navigation reduces frustration at the user's end.
                    </Typography>
                    <br />
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        <Typography fontFamily={'Jost-bold'} component="span" fontWeight="bold">Brand Storytelling:</Typography> Developed compelling content and 
                        visual elements to effectively communicate the Sapt Solutions brand story. Worked storytelling techniques into the UI to engage users and 
                        set this company apart in the marketplace.

                    </Typography>
                    <br />
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        <Typography fontFamily={'Jost-bold'} component="span">Usability testing and iteration:</Typography> Several rounds of usability testing 
                        with users were conducted to identify pain points and gather feedback. The design was then iteratively improved based on this feedback to 
                        enhance the usability and satisfaction of end-users.

                    </Typography>
                    <br />
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        <Typography fontFamily={'Jost-bold'} component="span" fontWeight="bold">Performance Optimization:</Typography> To ensure fast loading times and a 
                        smooth user experience, I implemented various performance optimization techniques. This included optimizing images, leveraging browser caching, 
                        and minimizing code.

                    </Typography>
                    
                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={50} />

            <Grid container>
                <Grid item md={2} />
                <Grid item md={1}>
                    <Typography fontFamily={'Jost-bold'} fontSize={22}> The Grand Reveal </Typography>
                </Grid>
                <Grid item md={1} />
                <Grid item md={6}>
                    <Grid item md={12} sx={{ textAlign: 'center', mt: 1 }}>
                        <img src='./Sapt/research.png' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </Grid>

                    <Typography fontFamily={'Jost-bold'} fontSize={20} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        Results
                    </Typography>

                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        <ul>
                            <li>User Engagement: It increased by 20% within the first three months. </li>
                            <li>User Satisfaction: Hit the 85% satisfaction rate.</li>
                            <li>Conversion Rate: This increased by 25%, thanks to optimized calls to action and user flows.</li>
                            <li>Harmonized Vision: Managed to juggle diverse visions from the founders and brought a cohesive, competitive digital presence to Sapt Solutions.</li>
                        </ul>
                    </Typography>

                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={50} />

            <Grid container>
                <Grid item md={2} />
                <Grid item md={1}>
                    <Typography fontFamily={'Jost-bold'} fontSize={22}> Learnings </Typography>
                </Grid>
                <Grid item md={1} />
                <Grid item md={2}>
                <img src='./Sapt/learning.png' style={{ maxWidth: '100%' }} />
                </Grid>
                <Grid item md={4} sx={{ ml: 2, p: 2 }}>
                    <Typography fontFamily={'Jost-300'} fontSize={14} textAlign={'justify'} color={'#414141'} lineHeight={2}>
                        <ul>
                            <li>Be comfortable with ambiguity </li>
                            <li> 1+1 = 3</li>
                            <li>Walk in users shoes to gain new insights.</li>
                            <li>Prototyping tool.</li>
                        </ul>
                    </Typography>

                </Grid>
                <Grid item md={2} />
            </Grid>

            <Box height={50} />


        </>
    )
}