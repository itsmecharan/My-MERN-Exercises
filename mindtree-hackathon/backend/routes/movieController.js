const express = require('express');
const router = express.Router();
const manage=require('../functions/manageMovieData');

router.post('/adddirector',manage.AddDirector);
router.post('/addmovie',manage.AddMovie);
router.get('/getalldirectors',manage.GetAllDirectors);
router.get('/getallmovies',manage.GetAllMovies);
router.get('/getdirectorbyname/:name',manage.getDirectorByName);

module.exports = router;