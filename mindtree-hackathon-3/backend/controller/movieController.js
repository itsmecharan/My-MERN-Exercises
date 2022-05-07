const express = require('express');
const MoviesData=require('../models/moviesModel');
const axios = require('axios');
// const { response } = require('express');

exports.AddMovieById= async(req,res) =>{
       const moviedata= new MoviesData(req.body);
       await moviedata.save()
       .then((result)=>{
           res
           .status(202)
           .json({message:"movie added"})
       })
       .catch((err)=>{
           res
           .status(400)
           .json({err})
       })
}

exports.AddMovieByText= async(req,res) =>{
    const movieArray = [...req.body.Search];
    for(let i=0;i<movieArray.length;i++){
        const moviedata= new MoviesData(movieArray[i]);
        await MoviesData.findOne({$or:[{imdbID:movieArray[i].imdbID}]})
        .then((one)=>{
            if(!one){
                moviedata.save()
                .then(()=>{
                    console.log('movie saved');
                })
            }
            if(i === movieArray.length-1){
                res.status(200).json({message:"movie data added"})
            }
        })
        .catch((err)=>{
            console.log(err);
            if(i=== movieArray.length-1){
                res.status(400).json({message:err})
            }
        })
    }
}


exports.GetMovieById= async (req,res) =>{
        const id = req.params.id;
        await MoviesData.findOne({$or: [{imdbID:id}]})
        .then((data)=>{
            if(data){
                return res
                .status(200)
                .send(data)
            }
            
            else{
                axios.get(`http://www.omdbapi.com/?i=${id}&apikey=104d15ca`)
                .then((result)=>{
                    if(result.data.Response === 'True'){
                  axios.post("http://localhost:5080/api/movies/addmoviebyid",result.data)
                   .then((Data)=>{
                            if(Data.status === 202){
                                res
                                .status(200)
                                .send(result.data)
                            } 
                   })
                   .catch((err)=>{
                       res
                       .status(400)
                       .json({message:'error occurred in add movie by id',err})
                       
                   })
                }
                else{
                    res.status(400).json({message:'no data found'})
                }

                })
                .catch((err)=>{
                    res.status(400).json({message:'error occurred in network'})
                })
                
            }
        })
}

exports.GetMoviesByText = async (req,res) =>{
    const text=req.params.text;
    await MoviesData.find({Title:new RegExp(text,'i')})
    .then((data)=>{
        if(data.length){
            res
            .status(200)
            .json({moviedata:data})
        }
        else{
            axios.get(`http://www.omdbapi.com/?s=${text}&apikey=104d15ca`)
            .then((result)=>{
                if(result.data.Response === 'True'){
                    axios.post("http://localhost:5080/api/movies/addmoviesbytext",result.data)
                    .then(()=>{
                        console.log('success');
                        res.status(200).json({moviedata:result.data});
                    })
                    .catch((err)=>{
                        res.status(400).json({message:'error occurred in add movies by text',err})
                    })
                }
                else{
                    res.status(400).json({message:'no data found'})
                }
            })
            .catch((err)=>{
                res.status(400).json({message:'error occurred in network',err})
            })
        }
    })
}