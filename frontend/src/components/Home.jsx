import { useNavigate } from 'react-router-dom';
import { React } from 'react';
import { Grid, Button, Typography, Card, CardActions, CardContent, CardMedia } from '@mui/material';

import background from './images/blue.jpg';

export default function Home() {
    const navigate = useNavigate();

    const myStyle = {
        backgroundImage: `url(${background})`,

        margin: '-10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    function MouseOver(event) {
        event.target.style.background = 'green';
    }
    function MouseOut(event) {
        event.target.style.background = '';
    }

    return (
        <>
            <div style={myStyle}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                    <Button
                        style={{ background: 'green', color: 'white' }}
                        variant="standard"
                        size="small"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </Button>
                </div>
                <Typography
                    variant={'h5'}
                    style={{ fontWeight: 'bold' }}
                    align={'center'}
                    marginTop={'30px'}
                    color={'green'}
                    fontSize={'40px'}
                >
                    Köszöntjük a vállalat igény bejelentő oldalán! <br />
                </Typography>

                <Grid container justifyContent="space-evenly" marginTop="130px">
                    <Grid
                        conatiner
                        item
                        // marginLeft="120px"
                    >
                        <Card sx={{ width: 500, height: 400 }} variant="outlined">
                            <CardMedia sx={{ height: 230 }} image="src/components/images/router.jpg" title="install" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" color="#800000" align={'center'}>
                                    Beüzemelési szolgáltatások
                                </Typography>
                                <Typography variant="body1" color="text.secondary" align={'center'}>
                                    Internet szolgáltatási igények, hardver- és szoftver eszközök beüzemelése.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Grid container justifyContent={'center'}>
                                    <Button
                                        size="medium"
                                        variant="contained"
                                        onClick={() => navigate('/install')}
                                        onMouseOver={MouseOver}
                                        onMouseOut={MouseOut}
                                        fullWidth
                                    >
                                        Megnézem
                                    </Button>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid
                        conatiner
                        item

                        // marginRight="120px"
                    >
                        <Card sx={{ width: 500, height: 400 }} variant="outlined">
                            <CardMedia sx={{ height: 230 }} image="src/components/images/repair.jpg" title="repair" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" color="#800000" align={'center'}>
                                    Javítási szolgáltatások
                                </Typography>
                                <Typography variant="body1" color="text.secondary" align={'center'}>
                                    Internet problémák javítása, beüzemelt eszközök cseréje, szerelése. Kamerák és kamerarendszerek hibáinak
                                    orvosolása.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Grid container justifyContent={'center'}>
                                    <Button
                                        size="medium"
                                        variant="contained"
                                        onClick={() => navigate('/repair')}
                                        onMouseOver={MouseOver}
                                        onMouseOut={MouseOut}
                                        fullWidth
                                    >
                                        Megnézem
                                    </Button>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
{
    /*
      <Typography
        variant={"h5"}
        style={{ fontWeight: "bold" }}
        align={"center"}
        marginTop={"20px"}
        marginBottom={"40px"}
        color={"Black"}
        fontSize={"30px"}
      >
        Kérjük válassza ki a kívánt tevékenységet!
      </Typography>
      <Grid container marginTop={"20px"}>
        <Grid
          container
          item
          md={12}
          xs={12}
          padding={"30px"}
          justifyContent={"center"}
        >
          <Button
            style={{ background: "grey", color: "white" }}
            variant="contained"
            size="large"
            onClick={() => navigate("/install")}
          >
            Beszerelési igény bejelentése{" "}
          </Button>
        </Grid>
        <Grid
          container
          item
          md={12}
          xs={12}
          padding={"30px"}
          justifyContent={"center"}
        >
          <Button
            style={{ background: "grey", color: "white" }}
            variant="contained"
            size="large"
            onClick={() => navigate("/repair")}
          >
            Javítási igény bejelentése{" "}
          </Button>
        </Grid>
        
        
        {/* <Grid
          container
          item
          md={12}
          xs={12}
          padding={"30px"}
          justifyContent={"center"}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/dashboard")}
          >
            Beszerelési igények
          </Button>
        </Grid>
        <Grid
          container
          item
          md={12}
          xs={12}
          padding={"30px"}
          justifyContent={"center"}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/dashboardrepair")}
          >
            Javítási igények
          </Button>
        </Grid> 
      </Grid> */
}
//     </>
//   );
// }
