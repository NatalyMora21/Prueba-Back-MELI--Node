const express = require("express");
const app = express();

//Import Routes
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//Indicar que todas las rutas 
//app.use('/',require('./products'));




module.exports = app;
