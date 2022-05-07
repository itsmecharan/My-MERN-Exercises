const express=require('express');
const router = express.Router();
const passport=require('passport')
const userRouteController=require('../controllers/user-route-controller')


//test route
//get api
router.get('/test',userRouteController.test)

//register user route
//POST API
router.post('/sign-up',userRouteController.register)

//otp generation route
//GET API
router.post('/login/generateOTP',userRouteController.generateOtp)

//verify OTP route
//POST API
router.post('/login/verify',userRouteController.verifyOtp)



module.exports=router;