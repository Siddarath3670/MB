import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultTheme = createTheme();

function SignUp() {

    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [address,setAddress] =useState('')
    const [lic,setLic] =useState('')
    const [password,setPassword] =useState('')


    const navigate = useNavigate();


   


    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestData = {
            name,
            phone,
            address,
            licenceNumber:lic,
            password
        }
        
        try {
        const response = await axios.post('http://localhost:8081/usersignup', requestData)
        console.log('Login successful', response.data);
        toast.success('SignUp successful');
        navigate('ulogin')

        }
        catch (error) {
            console.log("Values", values);
            console.error('Login failed', error);
            toast.error('SignUp failed');
        }
    };

    return (
        <>
        <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <PersonIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    value={name}
                                    autoFocus
                                    onChange={(e)=> setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="phone"
                                    label="Phone Number"
                                    name="phone"
                                    autoComplete="phone"
                                    value={phone}

                                    onChange={(e)=>setPhone(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="adress"
                                    label="Address"
                                    name="adress"
                                    autoComplete="adress"
                                    value={address}
                                    onChange={(e)=>setAddress(e.target.value)}
                                />
                            </Grid>                           
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="licenceNumber"
                                    label="Licence Number"
                                    name="licenceNumber"
                                    autoComplete="licenceNumber"
                                    value={lic}
                                    onChange={(e)=>setLic(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={password}

                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <ReactRouterDom.Link to="ulogin" variant="body2">
                                    Already have an account? Sign in
                                </ReactRouterDom.Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
        </>
    );
}

export default SignUp;