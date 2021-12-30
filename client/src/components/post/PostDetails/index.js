import React, { useEffect, useState } from 'react';
import img from 'assets/images/home/posts/img1.jpg'
import { Box, styled, Typography } from '@mui/material';
import {Edit, Delete} from '@mui/icons-material';
import { colors } from 'assets/styles/_colors';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getPost, deletePost } from 'service/api';

const StyledBox = styled(Box)(({theme})=>({
    padding: '0px 100px',
    [theme.breakpoints.down('sm')]: {
        padding: 0
    }
}))

const StyledImg = styled('img')(()=>({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
}))

const StyledEdit = styled(Edit)(()=>({
    margin: '5px',
    border: `1px solid ${colors.textGray}`,
    padding: '5px',
    borderRadius: '10px',
    "&:hover": {
        cursor: 'pointer',
        opacity: '0.6'
    }
}))
const StyledDelete = styled(Delete)(()=>({
    margin: '5px',
    border: `1px solid ${colors.textGray}`,
    padding: '5px',
    borderRadius: '10px'
}))
const StyleLink = styled(Link)(()=>({
    textDecoration: 'none',
    color: 'inherit'
}))
const Heading = styled(Typography)(()=>({
    fontSize: 38,
    fontWeight: 600,
    textAlign: 'center',
    margin: '50px 0 10px 0'
}))
const InfoBox = styled(Box)(({theme})=>({
    color: `${colors.textGray}`,
    display: 'flex',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}))


const PostDetails = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const {id} = useParams()

    useEffect(()=>{
        const fetchData = async() => {
            const data = await getPost(id);
            setPost(data);
        };
        fetchData();
    },[])

const handleDelete = async () => {
    await deletePost(post._id);
    navigate('/');
}

    return (
        <StyledBox>
            <StyledImg src={post?.picture || img} alt="details" />
            <Box sx={{padding: '0px 20px'}}>
            <Box sx={{float: 'right'}}>
                <StyledEdit color="primary" onClick={()=>navigate(`/update/${id}`)}/>
                <StyledDelete color="error" onClick={handleDelete} />
            </Box>
            <Heading>{post?.title}</Heading>
            <InfoBox>
                <StyleLink to={`/?username=${post.username}`}>
                    <Typography>Author: <b>{post?.username}</b></Typography>
                </StyleLink>
                <Typography sx={{ml: 'auto'}}>{new Date(post?.createdAt).toDateString()}</Typography>
            </InfoBox>
            <Typography>{post?.description} </Typography>
            </Box>
        </StyledBox>
    )
}

export default PostDetails
