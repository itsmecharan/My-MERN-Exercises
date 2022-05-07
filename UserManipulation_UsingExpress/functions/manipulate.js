//const express = require('express');
const UserData = require('../models/userData');
const bcrypt = require('bcryptjs');


//signing up
exports.signup=(req,res) =>{

            bcrypt.hash(req.body.password,10,function(err,hashedPass){
                    if(err){
                        res.json({
                            error:err
                        })
                    }

            let user =new UserData({
                UserName:req.body.username,
                Password:hashedPass,
                EmailId:req.body.email,
                PhoneNumber: req.body.phnum
            })
            UserData.findOne({$or: [{EmailId:req.body.email}]})
            .then(data =>{
                if(data){
                    res.json({message : "User with this email already exists !"});
                }
                else{
                    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                    if(user.EmailId.match(mailformat)){
                        user.save()
                    .then(user => {
                        res.json({
                            message:"User Added Successfully!"
                        })
                    })
                    .catch(error => {
                        res.json(error);
                    })
                    }
                    else{
                        res.json({
                            message:"Invalid email id!"
                        })
                    }
                    
                }
            })
            

           
        })
    }
        

//Login     
exports.login = (req,res) => {
    let email= req.body.email;
    let password = req.body.password;
    UserData.findOne({$or: [{EmailId:email}]})
    .then(user => {
        if(user){
            bcrypt.compare(password,user.Password,function(err,result){
              if(err){
                  res.json({error:err})
              } 
              if(result){
                  res.json({
                      message:'login successful',
                      UserName : user.UserName,
                      EmailId : user.EmailId,
                      PhoneNumber : user.PhoneNumber
                  })
              } 
              else{
                res.json({message:'Password does not matched'})
            }
            })
        }
        else{
            res.json({
                message:'Invalid Credentials!'
            })
        }
        
    })
}


//Update
// exports.update = (req,res) => {
//         UserData.findOne({$or: [{UserName:req.params.username}]})  
//         .then(user => {
//             //console.log(user);
//             if(user){
//             user.EmailId = req.body.email;
//             user.save()
//             .then(info => {
//                 res.json({message:"user data updated"});
//             })
//             .catch(error =>{
//                 res.json({message:error});
//             })
//             }
//             else{
//                 res.json({message:"user does not exist!"});
//             }
//         })     
// }


// //Delete
// exports.deleteData = (req,res) => {
//     UserData.findOne({$or: [{UserName:req.params.username}]})  
//     .then(user => {
//         //console.log(user);
//         if(user){
//         user.delete()
//         .then(info => {
//             res.json({message:"user data deleted"});
//         })
//         .catch(error =>{
//             res.json({message:error});
//         })
//         }
//         else{
//             res.json({message:"user does not exist!"});
//         }
//     })     
// }

// //Get Users
// exports.getusers=(req,res) => {
//     UserData.find()
//     .then(users =>{
        
//         if(users){
//             let obj=[];
//             //, psw: ${dta.Password}
//             users.forEach(dta =>{
//                 obj.push(`username : ${dta.UserName}, email : ${dta.EmailId}`);
//             });
//             res.send(obj);
            
//         }
//         else{
//             res.json({message:"no users"});
//         }
//     })
// }