var express= require('express');


var ProductController= require('../controllers/product.controller');
 
var router=express.Router();

// Restful API  -  /addProduct - endpoint
router.post('/addProduct',ProductController.addProduct);
router.get('/getAllProducts', ProductController.getAllProducts);
router.delete('/deleteProduct/:pid',ProductController.deleteProduct);
router.put('/updateProduct/:pid',ProductController.updateProduct);


module.exports=router;
