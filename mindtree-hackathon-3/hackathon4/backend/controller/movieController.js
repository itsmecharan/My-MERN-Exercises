const express = require('express');
const MoviesData=require('../models/moviesModel');

exports.AddMovie= async(req,res) =>{
        MoviesData.findOne({$or: [{}]})
}
exports.GetMovie= async (req,res) =>{
    
}