import { Box } from "@mui/material";
import Header from "components/Header";
import Home from "components/home";
import CreatePost from "components/post/CreatePost";
import PostDetails from "components/post/PostDetails";
import UpdatePost from "components/post/UpdatePost";
import React, { Fragment } from "react";
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Header />
      <Box sx={{ mt: "64px" }}>
      <Routes>
        <Route exact path="/" element = {<Home />} />
        <Route exact path="/details/:id" element = {<PostDetails />} />
        <Route exact path="/create" element={<CreatePost />} />
        <Route exact path="/update/:id" element={<UpdatePost />} />
      </Routes>
      </Box>
    </Fragment>
  );
}

export default App;
