import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Button, Typography } from '@mui/material';
import Internet from './images/internet.jpg';
import Cam from './images/camera.jpg';
import Router from './images/router.jpg';
import Print from './images/printer.jpg';
import b from './images/g.jpg';

export default function Repair() {
    const navigate = useNavigate();

    const myStyle = {
        backgroundImage: `url(${b})`,
        margin: '-10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <>
            <div style={myStyle}>
                <Button variant={'standard'} sx={{ color: 'red' }} onClick={() => navigate('/home')}>
                    vissza
                </Button>
                <Typography
                    variant={'h5'}
                    style={{ fontWeight: 'bold' }}
                    align={'center'}
                    marginTop={'15px'}
                    marginBottom={'20px'}
                    color={'green'}
                    fontSize={'40px'}
                >
                    Információk a javításról
                </Typography>

                <Grid container justifyContent={'space-between'} paddingX={'20px'}>
                    <Grid container item justifyContent={'center'} align={'center'}>
                        <Typography variant={'h6'}>
                            Cégünk az összes nyújtott szolgáltatás karbantartásáért felelős. Ide tartozik a teljeskörű internet üzemeltetése
                            és karbantartása, a különböző harver eszközök cseréje, javítása. Ha az alábbiak közül valamelyiket észleli
                            otthonában, kérjük jelentse be az esetet!
                        </Typography>
                    </Grid>
                    <Grid container item justifyContent={'center'} align={'center'}>
                        <Typography variant={'h6'} align={'center'} style={{ fontWeight: 'bolder' }} padding={'15px'}>
                            Zavarok az infrastruktúrában, internet kiesés, megszakadt kapcsolat. <br />
                            Harver eszközök hibásan- vagy nem üzemelnek. <br />
                            Kamera kép kiesése vagy a szerkezet leesése. Probléma lép fel a nyomdák kapcsolat kiépítése közben. <br />
                            Televíziós csatornák kiesése. <br />
                        </Typography>
                    </Grid>

                    <Grid container justifyContent={'center'} paddingY={'10px'}>
                        <Button style={{ background: 'green', color: 'white' }} variant="contained" onClick={() => navigate('/repairform')}>
                            Javítási igény leadása
                        </Button>
                    </Grid>
                </Grid>

                <Grid container alignItems={'flex-start'} justifyContent={'space-evenly'} paddingX={'20px'}>
                    <Grid item sx={{ paddingTop: { xs: '15px', xl: '0px' } }}>
                        <img src={Cam} style={{ width: 300, height: 200 }} />
                    </Grid>
                    <Grid item sx={{ paddingTop: { xs: '15px', xl: '120px' } }}>
                        <img src={Internet} style={{ width: 300, height: 200 }} />
                    </Grid>

                    <Grid item sx={{ paddingTop: { xs: '15px', xl: '120px' } }}>
                        <img src={Router} style={{ width: 300, height: 200 }} />
                    </Grid>
                    <Grid item sx={{ paddingTop: { xs: '15px', xl: '0px' } }}>
                        <img src={Print} style={{ width: 300, height: 200 }} />
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
