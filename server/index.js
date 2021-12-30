const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()



const connection = require('./database/db');


const postRoutes = require('./routes/post');


const PORT = process.env.PORT || '5000';

connection();

//middlewares
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))

//routes

app.use('/', postRoutes)

app.listen(PORT, ()=>console.log(`server is running at port ${PORT}`))