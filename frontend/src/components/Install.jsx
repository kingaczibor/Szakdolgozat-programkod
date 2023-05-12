import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Button, Typography } from '@mui/material';
import Internet from './images/internet.jpg';
import Cam from './images/camera.jpg';
import Router from './images/router.jpg';
import Print from './images/printer.jpg';

import b from './images/g.jpg';

export default function Install() {
    const navigate = useNavigate();

    const background = {
        backgroundImage: `url(${b})`,
        margin: '-10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <>
            <div style={background}>
                <Button variant={'standard'} sx={{ color: 'red' }} onClick={() => navigate('/home')}>
                    vissza
                </Button>
                <Typography
                    variant={'h5'}
                    style={{ fontWeight: 'bold' }}
                    align={'center'}
                    marginTop={'25px'}
                    marginBottom={'20px'}
                    color={'green'}
                    fontSize={'40px'}
                >
                    Beszerelési információk{' '}
                </Typography>

                <Grid container justifyContent={'space-between'} paddingX={'20px'}>
                    <Grid container item justifyContent={'center'} align={'center'}>
                        <Typography variant={'h6'}>
                            Vállalatunk fő profilja a teljeskörű internet szolgáltatás nyújtása magánszemélyek és vállalatok számára
                            egyaránt. Mindez magába foglalja a kívánt hálózat megtervezését, beüzemelését és folyamatos karbantartását.
                            Mindemellett nyújtunk egyéb szolgáltatásokat is, mint például a kamerák- és kamerarendszerek kezelése, tervezése
                            és szerelése; különféle hardver eszközök beüzemelése, karbantartása. Nem utolsó sorban ügyfeleinknek lehetősége
                            van a televíziós szolgáltatás kihasználására is, hiszen a cégünk rendelkezik ún. TV-boxokkal, melyek
                            segítségével be tudjuk biztosítani az ügyfeleink által kívánt csatornákat.
                        </Typography>
                    </Grid>
                    <Grid container justifyContent={'center'} paddingY={'10px'}>
                        <Button style={{ background: 'green', color: 'white' }} variant="contained" onClick={() => navigate('form')}>
                            Szolgáltatási igény bejelentése
                        </Button>
                    </Grid>
                </Grid>

                <Grid container alignItems={'flex-start'} justifyContent={'space-evenly'} paddingX={'20px'}>
                    <Grid item sx={{ paddingTop: { xs: '20px', xl: '0px' } }}>
                        <img src={Cam} style={{ width: 300, height: 200 }} />
                    </Grid>
                    <Grid item sx={{ paddingTop: { xs: '20px', xl: '150px' } }}>
                        <img src={Internet} style={{ width: 300, height: 200 }} />
                    </Grid>

                    <Grid item sx={{ paddingTop: { xs: '20px', xl: '150px' } }}>
                        <img src={Router} style={{ width: 300, height: 200 }} />
                    </Grid>
                    <Grid item sx={{ paddingTop: { xs: '20px', xl: '0px' } }}>
                        <img src={Print} style={{ width: 300, height: 200 }} />
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
