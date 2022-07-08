const mongoose = require("mongoose");

const Schema = mongoose.Schema;




const shippingSchema = new Schema({

    address:{
        type: String,
        required: true
    },
    
    city:{
       type: String,
       required:true
     },
     pincode:{
        type: Number,
        required:true
         }
    
})

const shipping = mongoose.model("shipping",shippingSchema);

module.exports = shipping;