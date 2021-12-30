import { Box, styled, Typography } from '@mui/material'
import React from 'react';
import img1 from 'assets/images/home/posts/img1.jpg';
import { colors } from 'assets/styles/_colors';

const StyledBox = styled(Box)(()=>({
    height: '350px',
    border: `1px solid ${colors.lightGray}`,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '20px 10px',
    '& > *': {
        padding: '0 5px 5px 5px'
    }
}))

const StyledTypography = styled(Typography)(()=>({
    color: `${colors.textGray}`,
    fontSize: 12
}))

const Heading = styled(Typography)(()=>({
    fontSize: 18,
    fontWeight: 800,
    textAlign: 'center'
}))

const Details = styled(Typography)(()=>({
    fontSize: 14,
    wordWrap: 'break-word'
}))

const StyledImg = styled('img')(()=>({
    height: '150px',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0px 0px'
}))

const Post = ({post}) => {
    return (
        <StyledBox>
            <StyledImg src={post.picture || img1} alt="post1" />
            <StyledTypography>{post.categories}</StyledTypography>
            <Heading>{post.title}</Heading>
            <StyledTypography>Author: {post.username}</StyledTypography>
            <Details>{post.description} </Details>
        </StyledBox>
    )
}

export default Post
