
import { Grid, CardContent, Typography, CardActions, Card, CardMedia, Button, Box, Link } from '@mui/material';

export default () => {
    return (
        <>

            <Box height={100} />
            <Grid container>
                <Grid item md={1} />
                <Grid item md={10} display={'flex'} flexDirection={'row'}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="./Arrivalease.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                ArrivalEase
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Services for Newcomers to Canada
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">
                                <Link href="#/arrivalease" underline="none">
                                    Learn More
                                </Link></Button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345, ml: '25px' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="./airwise.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                AirWise
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Assisting Passengers at Airport
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">
                                <Link href="#/airwise" underline="none">
                                    Learn More
                                </Link></Button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345, ml: '25px' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="./airwise.png"
                            title="Sapt Solutions"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Sapt
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Software Services
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">
                                <Link href="#/sapt" underline="none">
                                    Learn More
                                </Link></Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={1} />
            </Grid>

        </>
    )
}