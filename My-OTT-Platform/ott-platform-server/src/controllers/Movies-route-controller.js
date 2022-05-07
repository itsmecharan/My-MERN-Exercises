const { findOne } = require('../models/movies-model');
const Movies=require('../models/movies-model')

const test=async(req,res)=>{
    const body=await req.body;
    res.send(body)
}

const AddMovie = async (req,res) =>{
    await Movies.findOne({$or:[{name:req.body.name},{moviesId:req.body.movieid}]})
    .then((data)=>{
        if(data){
            res.status(400).json({message:'movie data already exists'});
        }
        else{
            const newMovie = new Movies({
             name:req.body.name,
             moviesId:req.body.movieid,
             coverPic : req.body.coverpic,
             likes : req.body.likes,
             directorsId : [...req.body.directorsid], 
             comments : [],
             geners : req.body.genere,
             languages : [...req.body.languages],
             actors: [...req.body.actors],
             rating : req.body.rating,
             duration : req.body.duration,
             series : req.body.series,
             latest : req.body.latest,
             VideoUrl:req.body.video
        })
        newMovie.save()
        .then(()=>{
            res.status(201).json({message:'movie added successfully'});
        })
        .catch((err)=>{
            res.status(400).json({message:err})
        })
        }

    })
    .catch((err)=>{
        res.json({message:"nno movie"})
    })
}

const GetAllMovies=async (req,res)=>{
        await Movies.find()
        .then((Data)=>{
                // console.log(Data);
                res.status(200).send(Data);
        })
        .catch((err)=>{
            res.status()
        })
}

const GetMovieById = async (req,res) =>{
    await Movies.findById({_id:req.params.id})
    .then((data)=>{
        console.log(data);
        res.status(200).send(data)

    })
    .catch((err)=>{
        res.status(400).json({err});
    })
}

module.exports={
    test,
    AddMovie,
    GetAllMovies,
    GetMovieById,
}