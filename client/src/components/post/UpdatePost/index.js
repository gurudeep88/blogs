import { Box, styled, FormControl, InputBase, Button, TextareaAutosize } from '@mui/material'
import React, { useEffect, useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import img from 'assets/images/home/posts/img1.jpg';
import { getPost, updatePost, uploadImage } from 'service/api';
import { useParams, useNavigate } from 'react-router-dom';

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

const StyledFormControl = styled(FormControl)(()=>({
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px'
}))
const StyledFileInput = styled('input')(() => ({
    display:' none'
  }));
  
const StyledInput = styled(InputBase)(()=>({
    flex: 1,
    margin: '0 30px',
    fontSize: '24px'
}))

const StyledTextareaAutosize = styled(TextareaAutosize)(()=>({
    width: '100%',
    marginTop: '30px',
    border: 'none',
    '&:focus-visible': {
        outline: 'none'
    }
}))
const UpdatePost = () => {
    const [post, setPost] = useState({
        title: "",
        description: "",
        picture: "",
        username: "Gurudeep",
        categories: "All",
        createdAt: new Date(),
      });
      const [file, setFile] = useState('');
      const [image, setImage] = useState('');

      const navigate = useNavigate() 
    const {id} = useParams();

    const handleFile = (e) => {
        setFile(e.target.files[0]);
      }

    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }

    useEffect(()=>{
        const fetchData = async() => {
            const data = await getPost(id);
            setPost(data);
        }
        fetchData();
    },[])

    useEffect(()=>{
        const getImage = async() => {
          if(file){
            const imageData = new FormData();
            imageData.append('name', file.name);
            imageData.append('file', file);
            const image = await uploadImage(imageData);
            post.picture = image.data;
            setImage(image.data);
          }
        }
        getImage();
      },[file])
    
    const handleUpdate = async() => {
        await updatePost(id, post);
        navigate(`/details/${id}`)
    }

    return (
        <StyledBox>
            <StyledImg src={post?.picture || img} alt="create" />
            <StyledFormControl>
            <label htmlFor="fileInput">
                <AddCircleIcon fontSize="large" color="action" sx={{cursor: 'pointer'}}/>
            </label>
            <StyledFileInput
              type="file" 
              id="fileInput"
              onChange={handleFile}
            />
                <StyledInput 
                    name="title"
                    value={post?.title} 
                    placeholder="Title"
                    onChange={handleChange}
                />
                <Button variant="contained" onClick={handleUpdate}>Update</Button>
            </StyledFormControl>
            <StyledTextareaAutosize 
                minRows={5} 
                placeholder='Tell Your Story...'
                name="description"
                value={post?.description}    
                onChange={handleChange}
            />
        </StyledBox>
    )
}

export default UpdatePost
