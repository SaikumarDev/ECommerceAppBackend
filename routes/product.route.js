var express= require('express');


var ProductController= require('../controllers/product.controller');
 
var router=express.Router();

// Restful API  -  /addProduct - endpoint
router.post('/addProduct',ProductController.addProduct);


module.exports=router;
