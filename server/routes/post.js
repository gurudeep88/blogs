const { uploadImage, getImage } = require('../controllers/image');
const {createPost, getAllPosts, getPost, updatePost, deletePost} = require('../controllers/post');
const upload = require('../utils/upload');


const router = require('express').Router();

router.post('/create', createPost);

router.get('/posts', getAllPosts);

router.get('/post/:id', getPost);

router.post('/update/:id', updatePost);

router.delete('/delete/:id', deletePost);

router.post('/image/upload', upload.single('file'), uploadImage);

router.get('/file/:filename', getImage);

module.exports = router;