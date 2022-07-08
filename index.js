const express = require("express");
const mongoose = require("mongoose");
const customer = require("./model/customer");
const purchase = require("./model/purchase");
const shipping = require("./model/shipping");
require("dotenv").config();


const app = express();
app.use(express.json());

const port = 3001;
const uri = process.env.monstr;

mongoose.connect(uri)

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Database Connected");
});


//////////////////////////////////////////////////////////////

app.post("/customer", async (req, res) => {

    try {
        console.log("req.body ", req.body);

        const newcustomer = new customer({
            CustomerName: req.body.CustomerName,
            email: req.body.email,
            mobno: req.body.mobno,
            city: req.body.city,
            id:req.body.id
            
        });

        await customer.create(newcustomer);

        res.send("Customer added");
    }
    catch (err) {
        console.log("error: ", err);
    }

})

/////////////////////////////////////////////////////////////////////////////

app.post("/purchase", async (req, res) => {

    try {
        console.log("req.body ", req.body);

        const newpurchase = new purchase({
            ProductName: req.body.ProductName,
            quantity: req.body.quantity,
            pricing: req.body.pricing,
            mrp: req.body.mrp,
            cid:req.body.cid
            });

        await purchase.create(newpurchase);

        res.send("data added");
    }
    catch (err) {
        console.log("error: ", err);
    }
})
/////////////////////////////////////////////////////////////////////////

app.post("/shipping", async (req, res) => {

    try {
        console.log("req.body ", req.body);

        const newshipping = new shipping({
            address: req.body.address,
            city: req.body.city,
            pincode: req.body.pincode,
            pid: req.body.pid,
            cid:req.body.cid
            });

        await shipping.create(newshipping);
        res.send(" shipping data added");
    }
    catch (err) {
        console.log("error: ", err);
    }
})

////////////////////////////////////////////////////////////////////////////






app.listen(port, () => {
    console.log(`Listening to port 3001`);
})