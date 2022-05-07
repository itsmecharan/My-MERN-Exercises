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
            bcrypt.compare(password,user.Password,(err,result) =>{
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


