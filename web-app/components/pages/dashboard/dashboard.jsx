import { Box, styled } from '@mui/material';
import React from 'react';
import { Content, Sidebar } from '../layout';

const StyledBox = styled(Box)(() => ({
    width: '100dvw',
    height: '100dvh',
    display: 'flex',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    // backgroundColor: 'red',
}));
const StyledMain = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    // backgroundColor: 'red',
}));

export const Dashboard = () => {
    return (
        <StyledBox>
            <Sidebar />
            <StyledMain>
                {/* <Header />  ini digunakan semisalnya ingin membuat header untuk meletakkan search bar atau apa gitu*/}
                <Content />
            </StyledMain>
        </StyledBox>
    );
};
