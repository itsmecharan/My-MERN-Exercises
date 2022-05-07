const express = require('express');
const mongoose = require('mongoose');

const shopdetails = new mongoose.Schema({
        ShopId:{
            type:String,
            required:true
        },
        CustomerName:{
            type:String,
            required:true
        },
        ProductCategories:{
            type:Array,
            required:true
        }
})

module.exports = mongoose.model('ShopDetails',shopdetails);