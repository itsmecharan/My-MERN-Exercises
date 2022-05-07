const express = require('express');
const router = express.Router();
const fun=require('../functions/manipulate');

router.post('/signup',fun.signup);
router.post('/login',fun.login);
router.post('/books',fun.authenticate,fun.addbook);
router.delete('/books/:BookId',fun.authenticate,fun.deleteBookById);
router.get('/books',fun.authenticate,fun.getbooks);
router.get('/books/:BookId',fun.authenticate,fun.getBookById);
router.put('/books/:BookId',fun.authenticate,fun.putBookById);
router.patch('/books/:BookId',fun.authenticate,fun.patchBookById);
router.get('/books/by/:BookAuthor',fun.authenticate,fun.getBooksByAuthor);
router.get('/books/priced/:min/:max',fun.authenticate,fun.getBooksByPriceRange);
router.get('/books/with-minimum-rating/:BookRating',fun.authenticate,fun.getBooksByMinRating);
router.get('/books/:searchby/:searchedtext',fun.authenticate,fun.getBooksByTextSearch);


module.exports = router;