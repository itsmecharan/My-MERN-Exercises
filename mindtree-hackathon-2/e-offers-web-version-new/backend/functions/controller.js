const express = require('express');
const CategoryData = require('../models/Categories');
const OfferData=require('../models/Offers');
const UserData=require('../models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
mongoose.set('useFindAndModify', false);

//Add Shop into Category
exports.AddCategory=(req,res) =>{
   CategoryData.findOneAndUpdate({CategoryName:req.body.catName},
        {$addToSet:{ShopId:req.body.shopId}})
        .then(()=>{
                 return res
                    .status(200)
                    .json({message:"shops's category is added into database successfully",
                        id:data.ShopId,
                        categoryname:CategoryName
                        })
            })
        .catch((err)=>{
                 return res
                    .status(400)
                    .json({
                        error:err,
                        message:'contact admin!'
                    })
        })
            
}

//add categories by admin
exports.AddCategoryByAdmin=(req,res)=>{
    const category=new CategoryData({
        CategoryName:req.body.catName,
        CategoryId:req.body.catId,
        ShopId:[]
    })
    category.save()
    .then(()=>{

        return res
        .status(200)
        .json({
            message:'new category type is added into database!'
        })
    })

    .catch((err)=>{
        return res
        .status(400)
        .json({
            message:err
        })
    })
}

//get all categories
exports.GetCategories=(req,res)=>{
    CategoryData.find()
    .then(Data =>{
        
        if(Data){
            let obj=[];
            Data.forEach(dta =>{
                obj.push(dta.CategoryName);
            });
            return res
            .status(200)
            .send(obj);
            
        }
        else{
            return res
            .status(404)
            .json({message:"no Categories Available!"});
        }
    })
}

//Add Offers
exports.AddOffers=(req,res)=>{
    const addoffer=new OfferData({
       ProductName:req.body.productname,
       ProductImage:req.body.productimage,
       CategoryName:req.body.productcategory,
       OfferPercentage:req.body.offerpercentage,
       OfferFromDate:req.body.offerfromdate,
       OfferToDate:req.body.offertodate,
       OfferingShopId:req.body.shopid,
       ShopName:req.body.shopname,
       Location:req.body.location
    })
    addoffer.save()
    .then(()=>{

        return res
        .status(200)
        .json({
            message:'new offer is added into database!'
        })
    })

    .catch((err)=>{
        return res
        .status(400)
        .json({
            message:err
        })
    })
}
//Get Offers Data
exports.GetOffers=(req,res)=>{
    OfferData.find()
    .then((data)=>{
        return res
        .status(200)
        .send([...data])
    })
    .catch((err)=>{
        return res
        .status(400)
        .json({message:err})
    })
}

//Get Offer By Id
exports.GetOfferById=(req,res)=>{
    const id=req.params.id;
    //console.log(id);
    OfferData.findOne({$or: [{_id:id}]})  
    .then((Data)=>{
        console.log(Data);
        return res
        .status(204)
        .send([{...Data}]);
    })
    .catch((err)=>{
        return res
        .status(404)
        .json({
            message:err
        })
    })
}

//User Registration
exports.Register=(req,res)=>{
    bcrypt.hash(req.body.password,10,function(err,hashedPass){
        if(err){
            return res
            .status(400)
            .json({
                message:err
            })
        }

let user =new UserData({
    UserName:req.body.username,
    Password:hashedPass,
    Email:req.body.email,
})
UserData.findOne({$or: [{Email:req.body.email}]})
.then(data =>{
    if(data){
        return res
        .status(400)
        .json({
            message : "User with this email already exists !"});
        
    }
    else{
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(user.Email.match(mailformat)){
            user.save()
        .then(user => {
            return res
            .status(201)
            .json({
                message:`User Signed up Successfully!`,
                username:user.UserName,
                emailid:user.Email
            })
        })
        .catch(error => {
            return res
            .status(400)
            .json({"message":error});
        })
        }
        else{
            return res
            .status(400)
            .json({
                message:"Invalid email id!"
            })
        }
        
    }
})
})
}

exports.Login=(req,res)=>{
    let email= req.body.email;
    let password = req.body.password;
    UserData.findOne({$or: [{Email:email}]})
    .then(user => {
            bcrypt.compare(password,user.Password,function(err,result){
              if(err){
                  return res
                  .status(401)
                  .json({message:err})
              } 
              if(result){
                  const username={UserName:user.UserName};
                  let token =jwt.sign(username,'cherry08',{expiresIn:'5m'});
                  return res
                  .status(200)
                  .json({
                      message:'login successful',
                      UserName : user.UserName,
                      EmailId : user.Email,
                      PhoneNumber : user.PhoneNumber,
                      token
                  })
              } 
              else{
                  return res
                  .status(401)
                .json({message:'Incorrect Password!'})
            }
            })
        
    })
    .catch((error) =>{
            return res
            .status(401)
            .json({
                message:'Invalid Credentials!',
                error
            })
        })
        
}

//Authorization Function
exports.authenticate=(req,res,next) =>{
    const header=req.header("Authorization");
    const token = header && header.split(' ')[1];
    if(token==null){
        return res.status(401);
    }
    jwt.verify(token,"cherry08",(err,username) =>{
        if(err){
            if(err.name === "TokenExpiredError"){
                return res
                .status(401)
                .json({message:"session expired... please login again"});
            }
            return res
            .status(403)
            .json({message:`something went wrong: ${err.name}`});
        }
        
        
        
        req.username=username;
        next();


    })

}