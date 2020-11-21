var mongoose= require('mongoose');

var ProductSchema= new mongoose.Schema(
    {
      pid: {
          type:Number,
          index:true
      },
      name: {
          type: String
      },
       price: {
           type: Number
       },
       imgsrc: {
        type: String
    }

    }
);
module.exports=mongoose.model('product',ProductSchema);
