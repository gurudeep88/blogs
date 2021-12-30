const mongoose = require('mongoose');

const connection = async()=> {
    try{
    const url = process.env.MONGO_DB_URL;
    await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
    console.log('Database connected successfully');
    }catch(e){console.log('error in mongoDB', e)}
}
module.exports = connection;