const express= require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/mydb';

const app =express();

mongoose.connect(url, {useNewUrlParser : true},{ useUnifiedTopology: true });
const conn = mongoose.connection;

conn.on('open', () =>{
    console.log("connected....");
})

app.use(express.json());

const router2=require('./routes/movieController');
app.use('/movieController',router2);

app.listen('5000',() =>{
    console.log("Server Started......");
})