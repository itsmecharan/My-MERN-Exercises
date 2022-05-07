const express = require('express');
const router = express.Router();
const fun=require('./functions/controller');

//Categories
router.post('/post/shop/category',fun.authenticate,fun.AddCategory);
router.get('/get/category',fun.GetCategories);
router.post('/post/category',fun.AddCategoryByAdmin)

//Offers
router.post('/post/offers',fun.AddOffers);
router.get('/get/offers',fun.GetOffers);
router.get('/get/offer/:id',fun.GetOfferById);

//User Routes
router.post('/post/register',fun.Register);
router.post('/post/login',fun.Login);


module.exports = router;