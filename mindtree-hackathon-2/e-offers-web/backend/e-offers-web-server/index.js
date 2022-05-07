const express= require('express');
const cors =require('cors');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/e-offers-web';

const app =express();


mongoose.connect(url, {useNewUrlParser : true},{ useUnifiedTopology: true });
const conn = mongoose.connection;

conn.on('open', () =>{
    console.log("connected....");
})

app.use(express.json());
app.use(cors());
const router= require('./routes');
app.use('/routes',router);


app.listen('5001',() =>{
    console.log("Server Started......");
})