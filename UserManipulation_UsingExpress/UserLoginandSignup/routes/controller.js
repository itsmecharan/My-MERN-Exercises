const express = require('express');
const router = express.Router();
const fun=require('../functions/manipulate');

router.post('/signup',fun.signup);
router.post('/login',fun.login);


module.exports = router;