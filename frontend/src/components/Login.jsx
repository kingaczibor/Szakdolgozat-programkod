import { React, useRef, useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import background from './images/blue.jpg';

const baseUrl = 'http://localhost:8000';

export default function Login() {
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function login() {
        console.log(email);
        try {
            const response = await axios.post(baseUrl + '/auth/token/', {
                email: email,
                password: password,
            });
            localStorage.setItem('access_token', response?.data?.access);
            localStorage.setItem('refresh_token', response?.data?.refresh);

            // setLoggedIn(true);
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div style={myStyle}>
                <Button variant={'standard'} sx={{ color: 'red' }} onClick={() => navigate('/home')}>
                    vissza
                </Button>
                <Typography variant={'h4'} style={{ fontWeight: 'bold' }} align={'center'} marginTop={'140px'}>
                    Dolgozói bejelentkezés
                </Typography>

                <Grid container paddingTop={'80px'}>
                    <Grid container item justifyContent={'center'} paddingBottom={'10px'}>
                        <TextField
                            style={{ background: 'white' }}
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid container item justifyContent={'center'}>
                        <TextField
                            style={{ background: 'white' }}
                            id="outlined-basic"
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid container item justifyContent={'center'} marginTop={'30px'}>
                    <Button style={{ background: 'grey', color: 'white' }} variant="contained" onClick={() => login()}>
                        Bejelentkezés
                    </Button>
                </Grid>
            </div>
        </>
    );
}
