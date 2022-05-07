const express = require('express');
const router = express.Router();
const fun=require('../functions/manipulate');

router.post('/signup',fun.signup);
router.post('/login',fun.login);
// router.patch('/update/:username',fun.update);
// router.delete('/delete/:username',fun.deleteData);
// router.get('/',fun.getusers);




module.exports = router;