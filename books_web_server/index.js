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

const router1= require('./routes/controller');
app.use('/controller',router1);


app.listen('5000',() =>{
    console.log("Server Started......");
})