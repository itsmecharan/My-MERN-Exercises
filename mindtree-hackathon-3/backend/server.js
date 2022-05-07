const express= require('express');
const cors =require('cors');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/hackathon3';

const app =express();

mongoose.connect(url, {useNewUrlParser : true},{ useUnifiedTopology: true });
const conn = mongoose.connection;

conn.on('open', () =>{
    console.log("connected....");
})

app.use(express.json());
app.use(cors());

const router1= require('./routes/moviesRoute');
app.use('/api/movies',router1);


app.listen('5080',() =>{
    console.log("Server Started......");
})