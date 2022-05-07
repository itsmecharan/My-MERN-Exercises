const express= require('express');
const cors =require('cors');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/e-offers-web';
const path = __dirname + '/views/';

const app =express();
app.use(express.static(path));

mongoose.connect(url, {useNewUrlParser : true},{ useUnifiedTopology: true });
const conn = mongoose.connection;

conn.on('open', () =>{
    console.log("connected....");
})
var corsOptions = {
    origin: "http://localhost:3000"
  };
  
app.use(cors(corsOptions));
app.use(express.json());
app.use(cors());
const router= require('./routes');
app.use('/routes',router);
app.get('*', function (req,res) {
    res.sendFile(path + "index.html");
});

app.listen('5001',() =>{
    console.log("Server Started......");
})