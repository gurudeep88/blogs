const grid = require('gridfs-stream');
const mongoose = require('mongoose');

let gfs;
const connection = mongoose.connection;
connection.once('open', ()=> {
    gfs = grid(connection.db, mongoose.mongo);
    gfs.collection('fs');
})

const uploadImage = (req, res) => {
    try{
        if(!req.file){
            return res.status(404).json("File not found");
        }
        const imageURL = `${process.env.API_SERVICE_URL}/file/${req.file.filename}`;

          res.status(200).json(imageURL);
    }catch(e){
        console.log('error while uploading image', e);
        res.status(500).json(e);
    }
}

const getImage = async(req, res) => {
    try{
        const file = await gfs.files.findOne({filename: req.params.filename});
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    }catch(e){
        console.log('error in getting image', e);
        res.status(500).json(e);
    }
}

module.exports = {uploadImage, getImage}