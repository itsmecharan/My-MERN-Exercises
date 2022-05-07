const mongoose = require('mongoose');

const userschema = new mongoose.Schema({

        UserName:{
            type: String,
            required : true
        },
        Password:{
            type:String,
            required : true
        },
        EmailId : {
            type: String,
            required: true
        },
        
        PhoneNumber:{
            type: Number,
            required: true
        }

})

module.exports = mongoose.model('userinfo',userschema);