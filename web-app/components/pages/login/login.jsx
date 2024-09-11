import { Box, styled, Typography, Paper, Grid, TextField, Button, InputAdornment, Link } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

const StyledBox = styled(Box)(() => ({
    width: '100dvw',
    height: '100dvh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    //  #f0f4f9
}));

const StyledPaper = styled(Paper)(() => ({
    padding: '20px',
    width: '690px',
}));

const StyledGrid = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'space-around',
}));

export const Login = () => {
    return (
        <StyledBox>
            <StyledPaper>
                <StyledGrid container>
                    <Box sx={{ display: 'grid', placeItems: 'center' }}>
                        <img src="/images/logo-ira.png" alt="Logo" style={{ backgroundColor: 'rgb(234, 245, 247)' }} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '15px',
                            textAlign: 'center',
                            position: 'relative',
                        }}
                    >
                        {/* <Typography
                            variant="h5"
                            sx={{
                                marginY: '10px',
                                fontWeight: 'bold',
                                // textAlign: 'left',
                                margin: '30px 0px 0px 0px',
                                fontSize: '30px',
                            }}
                        >
                            Login Anggota
                        </Typography> */}
                        <TextField
                            variant="outlined"
                            label="Email"
                            placeholder="Email"
                            required
                            size="small"
                            sx={{
                                margin: '30px 0px 0px 0px',
                                input: {
                                    '&::placeholder': {
                                        fontSize: '15px',
                                        fontWeight: '5px',
                                        color: 'gray',
                                    },
                                },
                            }}
                            // sx={{ borderRadius: '50%' }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailRoundedIcon fontSize="medium" />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <TextField
                            variant="outlined"
                            label="Password"
                            placeholder="Password"
                            required
                            size="small"
                            sx={{
                                input: {
                                    '&::placeholder': {
                                        fontSize: '15px',
                                        fontWeight: '5px',
                                        color: 'gray',
                                    },
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockRoundedIcon fontSize="medium" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            variant="contained"
                            size="medium"
                            color="primary"
                            disableElevation
                            sx={{ marginTop: '15px', textTransform: 'capitalize' }}
                        >
                            Login
                        </Button>
                        <Button
                            variant="text"
                            size="medium"
                            color="success"
                            disableElevation
                            sx={{ color: 'grey', textTransform: 'capitalize' }}
                        >
                            Lupa Password?
                        </Button>
                        {/* <Box sx={{ fontFamily: 'serif' }}>
                            <Typography component="span" sx={{ fontFamily: 'inherit' }}>
                                Lupa&nbsp;
                            </Typography>
                            <Link href="#" underline="hover" sx={{ fontFamily: 'inherit', marginBottom: '20px' }}>
                                {'Email / Password?'}
                            </Link>
                        </Box> */}
                        <Typography component="span" fontSize="small" sx={{ top: '80px' }}>
                            {'Belum punya akun?'}&nbsp;
                            <Link component={RouterLink} to="/welcome" underline="hover" color="black">
                                {'Daftar'}
                            </Link>
                        </Typography>
                    </Box>
                </StyledGrid>
                <Link component={RouterLink} to="/welcome">
                    To welcome page
                </Link>
            </StyledPaper>
        </StyledBox>
    );
};
