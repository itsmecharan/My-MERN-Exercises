const express = require('express');
const router = express.Router();
const movieController =require('../controller/movieController');

router.post('/addmoviebyid',movieController.AddMovieById);
router.post('/addmoviesbytext',movieController.AddMovieByText);

router.get('/getmovie/:id',movieController.GetMovieById);

router.get('/getmovies/:text',movieController.GetMoviesByText);

module.exports = router;