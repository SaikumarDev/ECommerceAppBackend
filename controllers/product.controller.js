
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

exports.getAllProducts=function(req,res){
    Product.find({},(err,docs) => {
        if(err){
            res.send({message:'error occured', err: err.message})
        }
        if(docs){
            console.log('docs',docs);
            res.send(docs);
        }
    })
}

exports.deleteProduct= (req,response) => {

    console.log(req.params.pid);

    var pid=req.params.pid;
 
   Product.findOneAndDelete({pid:pid},(err,res) => {
       if(err){
           console.log(err);
           response.send({status:false, err:err});
       }
       else
       {
           if(res){
               response.send({status:true});
           }
       }
   })
}