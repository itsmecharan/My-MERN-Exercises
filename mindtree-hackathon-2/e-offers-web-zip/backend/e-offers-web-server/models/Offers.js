const express = require('express');
const mongoose = require('mongoose');

const offerschema = new mongoose.Schema({
        OfferPercent:{
            type:Number,
            required:true
        },
        LastOfferDate:{
            type:Date,
            required:true
        },
        OfferCategoryId:{
            type:String,
            required:true
        },
        OfferedShopId:{
            type:String,
            required:true
        }
})

module.exports = mongoose.model('OfferData',offerschema);