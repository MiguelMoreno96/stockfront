const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const colors = require('colors');
const path = require('path');


const app = express();


app.use(cors({origin: true, credentials: true}));
app.use(express.urlencoded({extended: true}))
app.use(express.json());
//app.use(express.static(__dirname + './src/views/index.html'));
app.use( function(req,res,next){
    res.sendFile(__dirname + '/index.html')
});
//app.use('/api/v1/stock/index',require(''))

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => console.log(`server is running on port: ${PORT}`.green))
