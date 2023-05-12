import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Grid, Button } from '@mui/material';

import background from './images/blue.jpg';

export default function Endpage() {
    const myStyle = {
        backgroundImage: `url(${background})`,
        height: 760,
        width: 1520,
        marginLeft: '-10px',
        marginTop: '-10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    const navigate = useNavigate();
    return (
        <>
            <div style={myStyle}>
                <Grid container justifyContent={'center'} align={'center'}>
                    <Grid item align={'center'} justifyContent={'center'} marginTop={'200px'}>
                        <Typography variant={'h5'} style={{ fontWeight: 'bold' }}>
                            Köszönjük, hogy igénybe vette vállalatunk szolgáltatásait! <br />
                            Kollégáink hamarosan felveszik Önnel a kapcsolatot!
                            <br />
                        </Typography>
                        <Typography variant={'h5'} style={{ fontWeight: 'bold' }}>
                            További kellemes napot kívánunk!
                            <br />
                        </Typography>{' '}
                        <Grid item paddingY={'10px'}>
                            <Button variant={'contained'} color={'success'} onClick={() => navigate('/home')}>
                                vissza a főoldalra
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
