import { React, useState } from 'react';
import { Button, Grid, TextField, Radio, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import axios from 'axios';
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const baseUrl = 'http://localhost:8000';


import background from './images/blue.jpg';

export default function Repairform(props) {
    const myStyle = {
        backgroundImage: `url(${background})`,
        height: 940,
        width: 1520,
        margin: '-10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const [itemName, setItemName] = useState();
    const [problem, setProblem] = useState();
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();
    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        city: '',
        street: '',
        housenum: '',
        phoneNumber: '',
        email: '',
    });

    function handleChange(e) {
        setSelectedValue(e.target.value);
    }


    async function appendToRepairs() {
        try {
            const response = await axios.post(baseUrl + '/auth/repair-create/', {
                firstName: person.firstName,
                lastName: person.lastName,
                city: person.city,
                street: person.street,
                housenum: person.housenum,
                phone: person.mobile,
                email: person.email,
                item: itemName,
                what: problem,
                when: date,

            });

            if (response.status === 200) {
                console.log('sikerült');
                toast.success("Sikeres beküldés");
                navigate('/end');
            }
        } catch (error) {
            console.log(error);
            toast.error("Sikertelen beküldés, kérjük ellenőrizze a beírt adatokat!");
          }
    }
    

    return (
        <>
            <div style={myStyle}>
                <Button variant={'standard'} sx={{ color: 'red' }} onClick={() => navigate('/repair')}>
                    vissza
                </Button>
                <Grid container justifyContent={'center'}>
                    <Grid container justifyContent={'center'}>
                        <Typography variant={'h5'} style={{ fontWeight: 'bold' }} color="#800000">
                            Személyes adatok
                        </Typography>
                    </Grid>
                    <Grid item padding={'10px'} xs={12} sm={6}>
                        <TextField
                            style={{ background: 'white' }}
                            fullWidth
                            label="Vezetéknév"
                            type="text"
                            variant="outlined"
                            onChange={(e) => {
                                let copy = { ...person };
                                copy.lastName = e.target.value;
                                setPerson(copy);
                            }}
                            value={person.lastName}
                        />
                    </Grid>
                    <Grid item padding={'10px'} xs={12} sm={6}>
                        <TextField
                            style={{ background: 'white' }}
                            fullWidth
                            label="Keresztnév"
                            type="text"
                            variant="outlined"
                            onChange={(e) => {
                                let copy = { ...person };
                                copy.firstName = e.target.value;
                                setPerson(copy);
                            }}
                            value={person.firstName}
                        />
                    </Grid>
                    <Grid item padding={'10px'} xs={12} sm={6}>
                        <TextField
                            style={{ background: 'white' }}
                            fullWidth
                            label="Város"
                            type="text"
                            variant="outlined"
                            onChange={(e) => {
                                let copy = { ...person };
                                copy.city = e.target.value;
                                setPerson(copy);
                            }}
                            value={person.city}
                        />
                    </Grid>
                    <Grid item padding={'10px'} xs={12} sm={6}>
                        <TextField
                            style={{ background: 'white' }}
                            fullWidth
                            label="Utca"
                            type="text"
                            variant="outlined"
                            onChange={(e) => {
                                let copy = { ...person };
                                copy.street = e.target.value;
                                setPerson(copy);
                            }}
                            value={person.street}
                        />
                    </Grid>
                    <Grid item padding={'10px'} xs={12} sm={6}>
                        <TextField
                            style={{ background: 'white' }}
                            fullWidth
                            label="Házszám"
                            type="text"
                            variant="outlined"
                            onChange={(e) => {
                                let copy = { ...person };
                                copy.housenum = e.target.value;
                                setPerson(copy);
                            }}
                            value={person.housenum}
                        />
                    </Grid>
                    <Grid item padding={'10px'} xs={12} sm={6}>
                        <TextField
                            style={{ background: 'white' }}
                            fullWidth
                            label="Telefonszám"
                            type="text"
                            variant="outlined"
                            onChange={(e) => {
                                let copy = { ...person };
                                copy.mobile = e.target.value;
                                setPerson(copy);
                            }}
                            value={person.mobile}
                        />
                    </Grid>
                    <Grid container alignItems={'center'}>
                        <Grid item padding={'10px'} xs={12} sm={6}>
                            <TextField
                                style={{ background: 'white' }}
                                fullWidth
                                label="email"
                                type="text"
                                variant="outlined"
                                onChange={(e) => {
                                    let copy = { ...person };
                                    copy.email = e.target.value;
                                    setPerson(copy);
                                }}
                                value={person.email}
                            />
                        </Grid>
                        
                    </Grid>
                    <Grid container justifyContent={'center'} padding={'10px'} sx={{ borderTop: '3px solid grey' }}>
                        <Typography variant={'h5'} style={{ fontWeight: 'bold' }} color="#800000">
                            {' '}
                            Technikai részletek
                        </Typography>
                    </Grid>
                    <Grid padding={'10px'}>
                        <Typography align={'center'} variant={'body1'}>
                            Milyen eszközt érint a probléma?
                        </Typography>
                    </Grid>
                    <Grid item padding={'10px'} xs={12} sm={12}>
                        <TextField
                            style={{ background: 'white' }}
                            fullWidth
                            label="Eszköz "
                            type="text"
                            value={itemName}
                            variant="outlined"
                            onChange={(event) => setItemName(event.target.value)}
                            
                        />
                    </Grid>
                    <Grid padding={'10px'}>
                        <Typography align={'center'} variant={'body1'}>
                            Kérjük írja le, hogy milyen probléma merült fel a szolgáltatás használata során!
                        </Typography>
                    </Grid>
                    <Grid item padding={'10px'} xs={12} sm={12}>
                        <TextField
                            style={{ background: 'white' }}
                            fullWidth
                            label="Probléma "
                            type="text"
                            variant="outlined"
                            value={problem}
                            onChange={(event) => setProblem(event.target.value)}
                        />
                    </Grid>
                    <Grid padding={'10px'}>
                        <Typography align={'center'} variant={'body1'}>
                            Mikor történt az eset? Mióta nem használható a szolgáltatás?
                        </Typography>
                    </Grid>
                    
                    
                    <Grid item padding={'10px'} xs={12} sm={12}>
                    <LocalizationProvider sx={{width: '100%'}} dateAdapter={AdapterDateFns}>
                    <DatePicker
                            sx={{width: '100%'}}
                         value={date}
                         onChange={(newValue) => setDate(newValue)}
/>
    </LocalizationProvider>
                    </Grid>
                    <Grid container item padding={'20px'} justifyContent={'center'}>
                        <Button style={{ background: 'green', color: 'white' }} onClick={() => appendToRepairs()} variant="contained">
                            Javítási igény beküldése
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
