var mysql = require('mysql');
//var user_data= require('./sign_up.js');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "validation"
  });

  module.exports = con;



  /*con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });
    });*/
   
    