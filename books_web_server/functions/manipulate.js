const express = require('express');
const UserData = require('../models/userData');
const BooksData=require('../models/BooksData');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Get Books
exports.getbooks=(req,res) => {
    BooksData.find()
    .then(Data =>{
        
        if(Data){
            let obj=[];
            Data.forEach(dta =>{
                obj.push({
                    BookCover:dta.BookCover,
                    BookId:dta.BookId,
                    BookTitle:dta.BookTitle,
                    BookAuthor:dta.BookAuthor,
                    BookRating:dta.BookRating,
                    BookPrice:dta.BookPrice,
                    BookDescription:dta.BookDescription
                });
            });
            return res
            .status(200)
            .send(obj);
            
        }
        else{
            return res
            .status(404)
            .json({message:"no Books Available"});
        }
    })
}

//getBookById
exports.getBookById=(req,res) =>{
    BooksData.findOne({$or: [{BookId:req.params.BookId}]})  
    .then(data => {
        
          return res
          .status(200)
          .send([{
            BookCover:data.BookCover,
            BookId:data.BookId,
            BookTitle:data.BookTitle,
            BookAuthor:data.BookAuthor,
            BookRating:data.BookRating,
            BookPrice:data.BookPrice,
            BookDescription:data.BookDescription
          }]);
    
    })
    .catch((err)=>{
            return res
            .status(404)
            .json({message:"book does not exist with given id!"});
    })     

}


//Put Book By Id
exports.putBookById = (req,res) =>{
    BooksData.findOne({$or: [{BookId:req.params.BookId}]})  
    .then(data => {
        if(data)
        {
            data.BookCover=req.body.bookcover,
            data.BookId=req.body.bookid,
            data.BookTitle=req.body.booktitle,
            data.BookAuthor=req.body.bookauthor,
            data.BookRating=req.body.bookrating,
            data.BookPrice=req.body.bookprice,
            data.BookDescription=req.body.bookdesc
            data.save()
                .then(() => {
                    return res
                    .status(202)
                    .json({message:"Book data updated"});
                })
                .catch(error =>{
                     return res
                     .status(400)
                     .json({message:error});
                })
        }
        else{
            return res
            .status(400)
            .json({message:"Book does not exist!"});
        }
    })     
}
//Patch Book By Id
exports.patchBookById=(req,res) =>{
    BooksData.findOne({$or: [{BookId:req.params.BookId}]})  
    .then(data => {
        if(data)
        {
            data.BookCover=req.body.bookcover,
            data.BookPrice=req.body.bookprice,
            data.save()
                .then(() => {
                    return res
                    .status(202)
                    .json({message:"Book data updated"});
                })
                .catch(error =>{
                     return res
                     .status(400)
                     .json({message:error});
                })
        }
        else{
            return res
            .status(400)
            .json({message:"Book does not exist!"});
        }
    })     

}
//Get Books By Author Name
exports.getBooksByAuthor = (req,res) =>{
    const searchedBooks = [];
    const text=req.params.BookAuthor;
    const searchedtext = text.toLowerCase()
    BooksData.find()
    .then(books =>{
        if(books)
    {
        for(let i=0;i<books.length;i++){
            const author=books[i].BookAuthor;
            const isthere=  SearchBooksByText(author.toLowerCase(),searchedtext);
            if (isthere) {
                searchedBooks.push(books[i]);
            }
        }
        if(searchedBooks.length !== 0){
        return res
        .status(200)
        .send(searchedBooks)
        }
        else{
            return res
            .status(404)
            .json({
                message:"No Matches Found!"
            })
        }
    }
    else{
        return res
            .status(404)
            .json({
                message:"No Books Found!"
            })
    }

    })
}

//Text Searcher
const SearchBooksByText=(fulltext,searchedtext) =>{
    const p = fulltext.length;
    const q = searchedtext.length;
    let count = 0;

    for (let i = 0; i <= p - q; i++) {
        let j;
        for (j = 0; j < q; j++) {
            if (fulltext.charAt(i + j) != searchedtext.charAt(j)) {
                break;
            }
        }
        if (j == q) {
            count++;
           j = 0;
            }
        }

        if (count > 0) {
            return true;
        }
        else {
            return false;
        }

}

//Get Books Using Price Range
exports.getBooksByPriceRange =(req,res) =>{
const min=req.params.min;
const max=req.params.max;
const searchedBooks = [];

BooksData.find()
.then( books =>{
        for(let i=0;i<books.length;i++){
            const price=books[i].BookPrice;
            if (price >= min && price <=max) {
                searchedBooks.push(books[i]);
            }
        }
        if(searchedBooks.length !== 0){
        return res
        .status(200)
        .send(searchedBooks)
        }
        else{
            return res
            .status(404)
            .json({
                message:"No Matches Found!"
            })
        }
        })
    
.catch((err) =>{
        console.log(err);
        return res
            .status(404)
            .json({
                message:"No Books Found!"
            })
    
})


}

//Get Books By Minimum Rating
exports.getBooksByMinRating = (req,res) =>{

const rating=req.params.BookRating;
const searchedBooks = [];

BooksData.find()
.then( books =>{
    if(books)
    {
        for(let i=0;i<books.length;i++){
            const bookrating=books[i].BookRating;
            if (bookrating >= rating) {
                searchedBooks.push(books[i]);
            }
        }
        if(searchedBooks.length !== 0){
        return res
        .status(200)
        .send(searchedBooks)
        }
        else{
            return res
            .status(404)
            .json({
                message:"No Matches Found!"
            })
        }
    }

    else{
        return res
            .status(404)
            .json({
                message:"No Books Found!"
            })
    }
    
})
}

//Get Books By Text Search
exports.getBooksByTextSearch = (req,res) =>{
    const searchby= req.params.searchby;
    const text =req.params.searchedtext;
    const searchedtext=text.toLowerCase();
    const searchedBooks = [];
    BooksData.find()
    .then((books) =>{
        if(books){

            for(let i=0;i<books.length;i++){
                if(searchby === 'titlesearch'){
                    const title=books[i].BookTitle;
                    const isthere = SearchBooksByText(title.toLowerCase(),searchedtext);
                    if(isthere){
                        searchedBooks.push(books[i]);
                    }
                }
                if(searchby === 'description'){
                    const description=books[i].BookDescription;
                    const isthere = SearchBooksByText(description.toLowerCase(),searchedtext);
                    if(isthere){
                        searchedBooks.push(books[i]);
                    }
                }
            }
            if(searchedBooks.length !== 0){
                return res
                .status(200)
                .send(searchedBooks)
                }
                else{
                    return res
                    .status(404)
                    .json({
                        message:"No Matches Found!"
                    })
                }
            }
        else{
            return res
            .status(404)
            .json({
                message:"No Books Found!"
            })
        }
    })
    
}
//Add Books
exports.addbook=(req,res) =>{
    let book=new BooksData
    ({
        BookCover:req.body.bookcover,
        BookId:req.body.bookid,
        BookTitle:req.body.booktitle,
        BookAuthor:req.body.bookauthor,
        BookRating:req.body.bookrating,
        BookPrice:req.body.bookprice,
        BookDescription:req.body.bookdesc
    })
    BooksData.findOne({$or: [{BookId:req.body.bookid },{BookTitle:req.body.booktitle}]})
            .then((data) =>{
                if(data !== null)
                    {
                        return res
                        .status(400)
                        .json({message : "Book with this Id or Title already exists !"});
                    }
                else{
                        book.save()
                        .then(() =>{
                        return res
                        .status(201)
                        .json({
                         message:"Book Added Successfully"
                            })
                        })
                        .catch((error) =>{
                        return res
                        .status(400)
                        .json({
                             message:error
                            })
                        })
                        
                    }
                    
                })
}
//signing up
exports.signup=(req,res) =>{

            bcrypt.hash(req.body.password,10,function(err,hashedPass){
                    if(err){
                        return res
                        .status(400)
                        .json({
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
                    return res
                    .status(400)
                    .json({
                        message : "User with this email already exists !"});
                    
                }
                else{
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                    if(user.EmailId.match(mailformat)){
                        user.save()
                    .then(user => {
                        return res
                        .status(201)
                        .json({
                            message:`User Signed up Successfully!`,
                            username:user.UserName,
                            emailid:user.EmailId
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
        

//Login     
exports.login = (req,res) => {
    let email= req.body.email;
    let password = req.body.password;
    UserData.findOne({$or: [{EmailId:email}]})
    .then(user => {
            bcrypt.compare(password,user.Password,function(err,result){
              if(err){
                  return res
                  .status(401)
                  .json({error:err})
              } 
              if(result){
                  const username={UserName:user.UserName};
                  let token =jwt.sign(username,'cherry08',{expiresIn:'5m'});
                  return res
                  .status(200)
                  .json({
                      message:'login successful',
                      UserName : user.UserName,
                      EmailId : user.EmailId,
                      PhoneNumber : user.PhoneNumber,
                      token
                  })
              } 
              else{
                  return res
                  .status(401)
                .json({message:'Password does not matched'})
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


//Delete Book by id
exports.deleteBookById = (req,res) => {
    BooksData.findOne({$or: [{BookId:req.params.BookId}]})  
    .then(data => {
      
        if(data){
        data.delete()
        .then(() => {
            return res
            .status(204)
            .json({message:"book data deleted"});
        })
        .catch(error =>{
            return res
            .status(404)
            .json({message:error});
        })
        }
        else{
            return res
            .status(404)
            .json({message:"book does not exist with given id!"});
        }
    })     
}

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