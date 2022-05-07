const express=require('express');
const router = express.Router();
const moviesRouteController= require('../controllers/Movies-route-controller')
//test route
//GET API
router.get('/test',moviesRouteController.test)

//add Movies
//POST movies
router.post('/addmovie',moviesRouteController.AddMovie);


//Get Movies
router.get('/getallmovies',moviesRouteController.GetAllMovies);


//Get Movie By Id
router.get('/getmoviebyid/:id',moviesRouteController.GetMovieById);




module.exports=router;