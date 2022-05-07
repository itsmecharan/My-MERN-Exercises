const express = require('express');
const router = express.Router();
const fun=require('../functions/controller');

//Categories
router.post('/post/categories',fun.AddCategories);
router.get('/get/categories',fun.GetCategories);

//Offers
router.post('/post/offers',fun.AddOffers);
router.get('/get/offers',fun.GetOffers);

//Shop Details
router.post('/post/shopdetails',fun.AddShopDetails);
router.get('/get/shopdetails',fun.GetShopDetails);


module.exports = router;