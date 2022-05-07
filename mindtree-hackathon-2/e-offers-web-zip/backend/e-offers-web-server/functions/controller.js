const express = require('express');
const CategoryData = require('../models/CategoryData');
const OfferData=require('../models/OfferData');
const ShopDetails=require('../models/ShopDetails');

//Add Categories
exports.AddCategory=(req,res) =>{
    CategoryData.findOne({$or: [{CategoryId:req.body.catId}]})
            .then((data) =>{
                if(data.ShopId.includes(req.body.shopId)){
                    return res
                        .status(400)
                        .json({
                         message:"this shop is already included with this category!"
                            })
                }
                else{
                    data.update(
                        {CategoryName:req.body.catName},
                        {CategoryId:req.body.catId},
                        {$push: { ShopId: req.body.shopId }}
                    )
                    return res
                    .status(200)
                    .json({message:'category is added into database successfully'})
                }
            })
            .catch((err) =>{
                return res
                .status(400)
                .json({
                    error:err,
                    message:'contact admin'
                })
            })
                       
}