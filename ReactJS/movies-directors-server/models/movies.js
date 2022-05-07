const mongoose = require('mongoose');

const movieschema = new mongoose.Schema({

        MovieName:{
            type: String,
            required : true
        },
        MovieId:{
            type:String,
            required : true
        },
        MovieCollection: {
            type: Number,
            required: true
        },
        
        MovieRating:{
            type: Number,
            required: true
        }

})

module.exports = mongoose.model('movieinfo',movieschema);