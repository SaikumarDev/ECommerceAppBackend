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
       }
    }
);

module.exports=mongoose.model('product',ProductSchema);
