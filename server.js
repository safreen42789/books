const express = require('express');
const bodyParser = require('body-Parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

//define middlware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//connnect to mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist');
//start the API Server
app.listen(PORT, function(){
    console.log(`API Server now listening on PORT ${PORT}`)
}); 


