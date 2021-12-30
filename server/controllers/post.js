const Post = require("../schema/post");

const createPost = async (req, res)=>{
    try{
        const post = await new Post(req.body);
        post.save();
        res.status(200).json('blog successfully created')
    }catch(e){
        console.log('error in creating post', e);
        res.status(500).json(e);
    }
}

const getAllPosts = async(req, res) => {
    let username = req.query.username;
    let category = req.query.category;
    let posts;
    try{
        if(username){
           posts = await Post.find({username: username});
        }
        else if(category){
           posts = await Post.find({categories: category})
        }
        else {
            posts = await Post.find({});
        }
        res.status(200).json(posts);
    }catch(e){
        console.log('error in fetching all posts', e);
        res.status(500).json(e);
    }
}

const getPost = async(req, res) => {
    try{
        let post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(e){
        console.log('error in creating specified post', e);
        res.status(500).json();
    }
}

const updatePost = async(req, res) => {
    try{
        let post = await Post.findByIdAndUpdate(req.params.id,{$set: req.body}); //$set, $push, $addToSet
        return res.status(200).json('Blog Updated Successfully');
    }catch(e){
        console.log('error in updating post', e);
        res.status(500).json(e);
    }
}

const deletePost = async(req, res) => {
    try{
        let post = await Post.findByIdAndDelete(req.params.id);
        return res.status(200).json('Blog Deleted Successfully');
    }catch(e){
        console.log('error in updating post', e);
        res.status(500).json(e);
    }
}

module.exports = {createPost, getAllPosts, getPost, updatePost, deletePost};