var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/berkadia", { useNewUrlParser: true , useUnifiedTopology: true },(err)=>{
    if(err)
        console.log(err," error occured connection failed");
    else
        console.log("connection established");
})