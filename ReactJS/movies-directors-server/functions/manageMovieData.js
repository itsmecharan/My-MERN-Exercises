const DirectorData = require('../models/directors');
const MovieData=require('../models/movies');


//Add Director
exports.AddDirector=(req,res) =>{
    let director=new DirectorData
    ({
        DirectorName:req.body.DName,
        Age:req.body.DAge,
        Gender:req.body.DGender,
        Awards:req.body.DAwards
    })
    DirectorData.findOne({$or: [{DirectorName:req.body.DName }]})
            .then((data) =>{
                if(data !== null)
                    {
                        return res
                        .status(400)
                        .json({message : "Director with this Name already exists !"});
                    }
                else{
                        director.save()
                        .then(() =>{
                        return res
                        .status(201)
                        .json({
                         message:"Director Added Successfully"
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

//Add Movie
exports.AddMovie=(req,res) =>{
    let movie=new MovieData
    ({
        MovieName:req.body.MName,
        MovieId:req.body.MId,
        MovieCollection:req.body.MCollection,
        MovieRating:req.body.MRating
    })
    MovieData.findOne({$or: [{MovieName:req.body.MName }]})
            .then((data) =>{
                if(data !== null)
                    {
                        return res
                        .status(400)
                        .json({message : "Movie with this Name already exists !"});
                    }
                else{
                        movie.save()
                        .then(() =>{
                        return res
                        .status(201)
                        .json({
                         message:"Movie Added Successfully"
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

//Get All Directors
exports.GetAllDirectors=(req,res) =>{
    DirectorData.find()
    .then(Data =>{
        
        if(Data){
            let obj=[];
            Data.forEach(dta =>{
                obj.push({
                    DirectorName:dta.DirectorName,
                    Age:dta.Age,
                    Gender:dta.Gender,
                    Awards:dta.Awards
                });
            });
            return res
            .status(200)
            .send(obj);
            
        }
        else{
            return res
            .status(404)
            .json({message:"no Data Available"});
        }
    })
}


//Get All Movies
exports.GetAllMovies=(req,res) =>{
    MovieData.find()
    .then(Data =>{
        
        if(Data){
            let obj=[];
            Data.forEach(dta =>{
                obj.push({
                    MovieName:dta.MovieName,
                    MovieId:dta.MovieId,
                    MovieCollection:dta.MovieCollection,
                    MovieRating:dta.MovieRating
                });
            });
            return res
            .status(200)
            .send(obj);
            
        }
        else{
            return res
            .status(404)
            .json({message:"no Data Available"});
        }
    })
}

exports.getDirectorByName=(req,res) =>{
    DirectorData.findOne({$or: [{DirectorName:req.params.name}]})  
    .then(data => {
                    
          return res
          .status(200)
          .send([{
            DirectorName:data.DirectorName,
            Age:data.Age,
            Gender:data.Gender,
            Awards:data.Awards
          }]);
    
    })
    .catch((err)=>{
            return res
            .status(404)
            .json({message:"director does not exist with given name!"});
    })     

}

