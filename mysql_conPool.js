var mysql = require('mysql');
//var user_data= require('./sign_up.js');
var con_pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "validation"
  });

  module.exports = con_pool;