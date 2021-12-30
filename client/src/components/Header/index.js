import { AppBar, styled, Toolbar, Typography } from '@mui/material'
import { colors } from 'assets/styles/_colors';
import React from 'react'
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(()=>({
    backgroundColor: colors.white,
    color: colors.black
}));

const StyledToolbar = styled(Toolbar)(()=>({
    justifyContent: 'center',
    '& > *': {
        padding: 20
    }
}))
const StyledLink = styled(Link)(()=>({
    textDecoration: 'none',
    color: 'inherit'
}));

const Header = () => {
    
    return (
        <StyledAppBar >
            <StyledToolbar>
                <StyledLink to="/">Home</StyledLink>
                <Typography>About</Typography>
                <Typography>Contact</Typography>
                <Typography>Login</Typography>
            </StyledToolbar>
        </StyledAppBar>
    )
}

export default Header
