const express = require('express');
const mongoose = require('mongoose');

const categoryschema = new mongoose.Schema({
        CategoryName:{
            type:String,
            required:true
        },
        CategoryId:{
            type:String,
            required:true
        },
        ShopId:{
            type:Array,
            required:true
        }
})

module.exports = mongoose.model('CategoryData',categoryschema);