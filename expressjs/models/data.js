const mongoose = require('mongoose');

const productschema = new mongoose.Schema({

        productName:{
            type: String,
            required : true
        },
        productId : {
            type: Number,
            required: true
        },
        
        productQuantity:{
            type: Number,
            required: true
        },
        productPrice:{
            type: Number,
            required: true
        },
        discount :{
            type : Boolean,
            required: true,
            default : false
        }

})

module.exports = mongoose.model('productinfo',productschema);