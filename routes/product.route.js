var express= require('express');

var multer = require('multer');


var ProductController= require('../controllers/product.controller');
 
var router=express.Router();

var storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, 'uploads/');
    },
    filename: (req,file,cb)=>{
        let filename = Date.now() + "-" + file.originalname;
        req.body.imgsrc = filename;
        cb(null, filename);
    }
})

var uploadimage = multer({storage});


// Restful API  -  /addProduct - endpoint
router.post('/addProduct',uploadimage.single('image'),ProductController.addProduct);
router.get('/getAllProducts', ProductController.getAllProducts);
router.delete('/deleteProduct/:pid',ProductController.deleteProduct);
router.put('/updateProduct/:pid',ProductController.updateProduct);


module.exports=router;
