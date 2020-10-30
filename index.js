var express= require('express');

var mongoose=require('mongoose');

 var app= express();

 var ProductRoute= require('./routes/product.route');


 app.use(express.json());


 mongoose.connect('mongodb://localhost/farmit',{ useNewUrlParser: true, useUnifiedTopology: true}, function(err){

    if(err){
        console.log(err);
    }
    else
    {
        console.log("connected to db");
    }
 });
 

 app.use(ProductRoute);

 app.listen(9013,function(){
     console.log("server is up and running!");
 })








