const express= require('express');
const cors=require('cors');
const env =require('dotenv') 
const mongoose=require('mongoose')
const adminRoutes=require('./src/Routes/admin-routes')
const userRoutes=require('./src/Routes/user-routes')
const moviesRoutes=require('./src/Routes/movies-route')
const passport=require('passport')
const jwt=require('jsonwebtoken')
// const userRoutes=require('./src/Routes/user-routes')
const bodyParser= require('body-parser');
env.config();

const connStr=`mongodb://localhost/ott-platform`

const app= express();

const startConfig= async()=>{
    await app.use(cors());
    await app.use(bodyParser.urlencoded({extended:false}));
    await app.use(bodyParser.json());
    app.use(passport.initialize());
    require('./src/config/passport')(passport);
}

const startServer=async()=>{
    await startConfig();

    console.log('initilizing DB');
    await mongoose.connect(connStr,{useNewUrlParser:true,useUnifiedTopology: true })
    .then(()=>{console.log('connected to mongoDB')})
    .catch((err)=>console.log(err));
    mongoose.connection.on('error',(err)=>console.log(err.message))    
    const server =await app.listen(process.env.PORT)
    app.use('/api/admin',adminRoutes)
    app.use('/api/user',userRoutes)
    app.use('/api/movies',moviesRoutes)
    // app.use('/api/user',userRoutes)
    server.on('error',(err)=>console.log(err.message))
    
}
startServer()
.then(()=>{console.log('server started on',process.env.PORT)})
.catch((err)=>console.log(err.message));



