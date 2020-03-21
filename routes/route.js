var express = require('express');
var router = express.Router();
var customers = require('../Database/schema');
//var insert = require('../Services/insert');

router.get('/Customers',async (req,res)=>{
    try{
         const result = await customers.find();
         res.json(result);
       }
   catch{
            res.send("error ocurred while get methods");
       }   
});
  

router.post('/addcustomer',async(req,res)=>{
    try{
        console.log("abx");
        const customer = new customers({
            "firstname" : req.body.firstname,
            "lastname" : req.body.lastname,
            "email":req.body.email,
            "address" : req.body.address,
            "city" : req.body.city,
            "state" : req.body.state
        });
            console.log(customer.firstname);
           const result = await customer.save();
           res.json("details inserted");
        }
    catch{
            res.send("error ocurred in post method");
        }
   
});

router.put('/Customers/:id',(req,res)=>{
  /*  try{
           const result = await customers.updateOne({name : {eq :res.body.firstname},{ "lastname"
            : res.body.lastname,"email" :res.body.email,"address" :res.body.address});
       }
    catch{
            res.send("error occured in put");
        }
   // res.send("put method");*/
});

router.deleteUser('/customers/:user',async (req,res)=>{
    try{
         const result = await customers.deleteOne({name : {eq : req.body.name}});
         res.send("data deleted ",result);
       }
    catch{
            res.send("error ocurred in delete method");
        }
})
module.exports = router;
