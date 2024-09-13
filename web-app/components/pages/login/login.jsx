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
}));

const StyledPaper = styled(Paper)(() => ({
    padding: '20px',
    width: '690px',
}));

const StyledGrid = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'space-around',
}));

const BoxImage = styled(Box)(() => ({
    display: 'grid',
    placeItems: 'center',
}));

const StyledImage = {
    backgroundColor: 'rgb(234, 245, 247)',
};

const BoxLogin = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    textAlign: 'center',
    position: 'relative',
    padding: '30px 0px 0px 0px',
}));

// For Input text
const InputField = (props) => <StyledTextField variant="outlined" required size="small" {...props} />;

const StyledTextField = styled(TextField)(() => ({
    '& .MuiInputBase-input::placeholder': {
        fontSize: '15px',
        fontWeight: '400',
        color: 'gray',
    },
}));
//end

const LoginButton = styled(Button)(() => ({
    marginTop: '15px',
    textTransform: 'capitalize',
}));

const ForgotButton = styled(Button)(() => ({
    color: 'gray',
    textTransform: 'capitalize',
}));

const SignUpText = styled(Typography)(() => ({
    top: '80px',
    fontSize: 'small',
}));

export const Login = () => {
    return (
        <StyledBox>
            <StyledPaper>
                <StyledGrid container>
                    <BoxImage>
                        <img src="/images/logo-ira.png" alt="Logo" style={StyledImage} />
                    </BoxImage>
                    <form action="" method="post">
                        <BoxLogin>
                            <InputField
                                label="Email"
                                placeholder="Email"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailRoundedIcon fontSize="medium" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <InputField
                                label="Password"
                                placeholder="Password"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockRoundedIcon fontSize="medium" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <LoginButton variant="contained" size="medium" color="primary" disableElevation>
                                Login
                            </LoginButton>
                            <ForgotButton variant="text" size="medium" disableElevation>
                                Lupa Password?
                            </ForgotButton>
                            <SignUpText component="span">
                                {'Belum punya akun?'}&nbsp;
                                <Link component={RouterLink} to="/welcome" underline="hover" color="black">
                                    {'Daftar'}
                                </Link>
                            </SignUpText>
                        </BoxLogin>
                    </form>
                </StyledGrid>
                <Link component={RouterLink} to="/welcome">
                    To welcome page
                </Link>
            </StyledPaper>
        </StyledBox>
    );
};
