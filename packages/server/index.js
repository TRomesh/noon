const express = require('express');
const app =express();
const path = require('path');
const server = require('http').Server(app);
const cors = require('cors')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const AppRoutes = require('./routes/approutes');

const port =process.env.PORT || 3030;;

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/noon');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended:true
}));

app.use(cors);

AppRoutes(app);

server.listen(port,()=> console.log('Running on port: '+port));
