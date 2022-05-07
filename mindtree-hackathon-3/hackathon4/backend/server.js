const express= require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/hackathon3';

const app =express();

mongoose.connect(url, {useNewUrlParser : true},{ useUnifiedTopology: true });
const conn = mongoose.connection;

conn.on('open', () =>{
    console.log("connected....");
})

app.use(express.json());

const router1= require('./routes/movies');
app.use('/api/movies',router1);


app.listen('5080',() =>{
    console.log("Server Started......");
})