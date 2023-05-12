import { React, useEffect, useState } from 'react';
import { Button, Grid, Typography, Paper, TextField, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';


import axios from 'axios';

const baseUrl = 'http://localhost:8000';

export default function ItemRegister() {
    const navigate = useNavigate();
    const [ItemType, setItemType] = useState({});
    const [ItemName, setItemName] = useState('');
    const [items,setItems] = useState([])
    const [newItemType, setNewItemType] = useState('')
    const [itemTypes, setItemTypes] = useState([])

    async function getItems() {
        try {
            const response = await axios.get(baseUrl + '/auth/items');

            if (response.status === 200) {
                console.log(response?.data);
                setItems(response?.data?.items);
                setItemType(response?.data?.item_types?.[0])
                setItemTypes([...response?.data?.item_types, {id:0, name: 'Új'}])
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
        getItems()
    },[])

    async function ItemRegister() {
        try {
            const response = await axios.post(baseUrl + '/auth/itemregister/', {
                item: ItemName,
                new: ItemType?.id == 0,
                newItem: newItemType,
                type: ItemType,
            });

            console.log(response.data);
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
        } 
    }

    return (
        
            itemTypes?.length ?  <>
            <style>{'body { background-color: honeydew; }'}</style>
            <Button variant={'standard'} sx={{ color: 'red' }} onClick={() => navigate('/dashboard')}>
                vissza
            </Button>
            <Grid justifyContent={'center'} align={'center'} marginTop={'30px'} padding={'20px'}>
                <Typography variant={'h5'} style={{ fontWeight: 'bold' }}>
                    Eszköz regisztráció
                </Typography>
            </Grid>
            <Grid container justifyContent={'center'} padding={'10px'}>
                <Grid item xs={12} sm={10} md={6} xl={4}>
                    <Paper elevation={6}>
                        <Grid container padding={'10px'}>
                            <Grid item xs={12} paddingY={'5px'}>
                               
                                <Select
                                    value={
                                        JSON.stringify(itemTypes?.find((type) => type?.id == ItemType?.id))
                                    }
                                    onChange={(event) => {
                                        setItemType(JSON.parse(event.target.value))
                                        
                                    }}
                                >
                                    {itemTypes?.map((type) => (
                                        <MenuItem key={type?.id}value={JSON.stringify(type)}>{type?.name}</MenuItem>
                                    ))}
                                </Select>
                                {ItemType?.id == 0 &&
                                 <TextField
                                    fullWidth
                                    label={'Eszköz kategória'}
                                    size={'small'}
                                    onChange={(e) => setNewItemType(e.target.value)}
                                    value={newItemType}
                                
                                />}
                               
                            </Grid>
                            <Grid item xs={12} paddingY={'5px'}>
                                <TextField
                                    fullWidth
                                    label={'Eszköz típus'}
                                    size={'small'}
                                    onChange={(e) => setItemName(e.target.value)}
                                    value={ItemName}
                                />
                            </Grid>

                            <Grid item xs={12} paddingY={'5px'}>
                                <Button  variant={'contained'} fullWidth onClick={ItemRegister}>
                                    Mentés
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </> 
        
       : null
    );
}
