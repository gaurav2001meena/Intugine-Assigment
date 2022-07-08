const mongoose = require("mongoose");

const Schema = mongoose.Schema;




const purchaseSchema = new Schema({

    ProductName:{
        type: String,
        required: true
    },
    
    quantity:{
       type: Number,
       required:true
     },
     pricing:{
        type: Number,
        required:true
         },
     mrp:{
        type: Number,
        required: true
     },
    cid: {
        type: String,
        required: true
        
      }
     
})

const purchase = mongoose.model("purchase",purchaseSchema);

module.exports = purchase;