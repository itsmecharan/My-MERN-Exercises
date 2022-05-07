const express = require('express');
const mongoose = require('mongoose');

const offerschema = new mongoose.Schema({
        ProductName:{
            type:String,
            required:true
        },
        ProductImage:{
            type:String,
            required:true
        },
        CategoryName:{
            type:String,
            required:true
        },
        OfferPercentage:{
            type:Number,
            required:true
        },
        OfferFromDate:{
            type:Date,
            required:true
        },
        OfferToDate:{
            type:Date,
            required:true
        },
        OfferingShopId:{
            type:String,
            required:true
        },
        ShopName:{
            type:String,
            required:true
        },
        Location:{
            type:String,
            required:true
        }
})

module.exports = mongoose.model('OfferData',offerschema);