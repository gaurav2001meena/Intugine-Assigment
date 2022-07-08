const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const customerSchema = new Schema({

    CustomerName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    mobno:{
       type: Number,
       required:true
     },
     city:{
        type: String,
        required: true
     }

     
})

const customer = mongoose.model("customer",customerSchema);

module.exports = customer;