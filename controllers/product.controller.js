
var Product=require('../model/product.model');

exports.addProduct=function(req,res){

   console.log(req.body);

     
     var ProductDocument =new Product(req.body);

     ProductDocument.save((err,product) => {
         if(err){
             res.send(err);
         }
         else
         {
             res.send(product);
         }
     })

  

}