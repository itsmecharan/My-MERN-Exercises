const express = require('express');
const mongoose = require('mongoose');

const bookschema = new mongoose.Schema({
        BookCover:{
            type:String,
            required:true
        },
        BookId:{
            type:String,
            required:true
        },
        BookTitle:{
            type: String,
            required : true
        },
        BookAuthor:{
            type:String,
            required : true
        },
        BookRating : {
            type: Number,
            required: true
        },
        
        BookPrice:{
            type: Number,
            required: true
        },
        BookDescription:{
            type: String,
            required : true
        }

})

module.exports = mongoose.model('BooksData',bookschema);