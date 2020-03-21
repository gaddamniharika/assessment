var express = require('express');
var app = express();

var bodyparser = require('body-parser');
app.use(bodyparser.json());

const cors = require('cors');
app.use(cors());
const route = require('./routes/route');
app.use(route);

app.listen(1000,()=>console.log("port listening on 1000"));