const express= require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/mydb';

const app =express();

mongoose.connect(url, {useNewUrlParser : true});
const conn = mongoose.connection;

conn.on('open', () =>{
    console.log("connected....");
})

app.use(express.json());

const router1= require('./routes/myroute');
app.use('/myroute',router1)

app.listen('9000',() =>{
    console.log("Server Started......");
})

