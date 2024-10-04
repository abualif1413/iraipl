import React from 'react';
import { styled, Box } from '@mui/material';

const StyledBox = styled(Box)(() => ({
    width: '90dvw',
    height: '10dvh',
    // backgroundColor: 'transparent',
    backgroundColor: '#f6f6f6',
}));

export const Header = () => {
    return (
        <StyledBox>
            <div>Header</div>
        </StyledBox>
    );
};
