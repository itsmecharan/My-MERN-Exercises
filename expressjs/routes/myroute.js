const express = require('express');
const router = express.Router();
const productData = require('../models/data');

router.get('/', async(req,res) => {
   try{
        const info = await productData.find();
        res.json(info);
   }
   catch(err){
       res.send('Error'+ err);
    
   }

})

router.get('/:id', async(req,res) => {
    try{
         const info = await productData.findById(req.params.id);
         
                res.json(info);
        
    }
    catch(err){
        res.send('Error'+ err);
        //res.status(400).send(err.message);
    }
 
 })

router.post('/', async(req,res) => {
    const postinfo = new productData({
        productName: req.body.pname,
        productId: req.body.pid,
        productQuantity: req.body.pquantity,
        productPrice: req.body.pprice,
        discount: req.body.discount

    })
    try{
        const dta = await postinfo.save();
        res.json(dta);
    }
    catch(err){
        console.log("Error"+err);
    }
})

router.patch('/:id', async(req,res) => {
    try{
        const info = await productData.findById(req.params.id);
        info.discount =req.body.discount;
        const patchdata= await info.save();
        res.json(patchdata);
    }
    catch(err){
        res.send("error"+err);
    }
})




module.exports = router;