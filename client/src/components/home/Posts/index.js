//import { Box, styled } from '@mui/material'
import { Grid, styled } from '@mui/material'
import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import Post from '../Post';
import {getAllPosts} from 'service/api'

const StyledLink = styled(Link)(()=>({
    textDecoration: 'none', 
    color: 'inherit', 
    cursor: 'pointer'
}))
const Posts = () => {
    const [posts, setPosts] = useState();
    const {search} = useLocation();

    useEffect(()=>{
        const fetchPosts = async() => {
            const data = await getAllPosts(search);
            setPosts(data);
        }
        fetchPosts();
    }, [search])
    
    return (
        <>
        {posts?.map(post => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={post._id}>
                <StyledLink to={`/details/${post._id}`}>
                    <Post post={post}/>
                </StyledLink>
            </Grid>
        ))}
        </>
    )
}

export default Posts
