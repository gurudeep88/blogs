import React from 'react';
import banner from 'assets/images/home/banner/banner1.jpg';
import { Box, styled, Typography } from '@mui/material';
import { colors } from 'assets/styles/_colors';

const StyledBox = styled(Box)(()=>({
    
    //background: `url() cover no-repeat center #000 `,
    backgroundImage: `url(${banner})`,
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
backgroundSize: '100% 100%',
    width: '100%',
    height: '70vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    '& :first-child': {
        fontSize: 65,
        color: colors.white,
        lineHeight: 1
    },
    '& :last-child': {
        fontSize: 20,
        backgroundColor: colors.white,
        padding: '0 1px'
    }
}))

const Banner = () => {

    return (
           <StyledBox>
                <Typography>BLOG</Typography>
                <Typography>For Regional News</Typography>
           </StyledBox>
    )
}

export default Banner
