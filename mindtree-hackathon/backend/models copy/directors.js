const mongoose = require('mongoose');

const directorschema = new mongoose.Schema({

        DirectorName:{
            type: String,
            required : true
        },
        Age:{
            type:String,
            required : true
        },
        Gender : {
            type: String,
            required: true
        },
        
        Awards:{
            type: Number,
            required: true
        }

})

module.exports = mongoose.model('directorinfo',directorschema);