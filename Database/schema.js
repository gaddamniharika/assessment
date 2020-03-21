require('./db');
var mongoose = require('mongoose');
const customer_schema = mongoose.Schema({
            "firstname" : String,
            "lastname"  : String,
            "address"   : String,
            "city"      : String,
            "state"     : String
    });
module.exports = mongoose.model("customers",customer_schema);