import {
  Button,
  styled,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import { colors } from "assets/styles/_colors";
import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import { categories } from "constants/categories";

const StyledButton = styled(Button)(() => ({
  color: colors.white,
  background: colors.blue,
  margin: 20,
  width: "86%",
  '&:hover': {
    color: colors.blue
  }
}));

const Categories = () => {
  const navigate = useNavigate()

  // const handleCategory = () => {
  //   navigate()
  // }
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <StyledButton variant="outlined" onClick={()=>navigate('/create')}>Create Blog</StyledButton>
      <Box
        sx={{
          width: "100%",
          maxWidth: {xs: '90%', sm: 360},
          bgcolor: "background.paper",
          border: `1px solid ${colors.gray}`,
        }}
      >
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton>
            <ListItemText primary="All Categories" onClick={()=>navigate('/')} />
          </ListItemButton>
          {categories.map((category, index) => (
            <>
              <Divider />
              <ListItemButton key={index}>
                <ListItemIcon sx={{display: { sm: 'none', md: 'block'}}}>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={category} onClick={()=>navigate(`/?category=${category}`)} />
              </ListItemButton>
            </>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Categories;
