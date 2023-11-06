var mysql = require('mysql');
//var user_data= require('./sign_up.js');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "validation"
  });

  module.exports = con;



 
   
    
