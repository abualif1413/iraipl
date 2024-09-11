import { Box, Paper, styled, Typography, Link } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const StyledBox = styled(Box)(() => ({
    width: '100dvw',
    height: '100dvh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledPaper = styled(Paper)(() => ({
    padding: '30px',
    width: '800px',
}));

export const Home = () => {
    return (
        <StyledBox>
            <StyledPaper>
                <Typography variant="h2">IRA Pengelolaan v1</Typography>
                <Typography variant="h4">by: Khalifi Matjar</Typography>
                <Typography variant="h5">Assalamualaikum, welcome to home of this application</Typography>
                <Link component={RouterLink} to="/welcome" sx={{ marginRight: '10px' }}>
                    To welcome page
                </Link>
                <Link component={RouterLink} to="/login">
                    To login page
                </Link>
            </StyledPaper>
        </StyledBox>
    );
};
