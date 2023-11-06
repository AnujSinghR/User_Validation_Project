let mysql = require('mysql');

// connection to db
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "validation"
  });
let a;
  con.connect(function() {
    let an='anuj';
    an.toString;
    console.log("Connected!");
   // var sql = "INSERT INTO userdata (gmail, Username, Password) VALUES ('hello','hii','namo')";
   var sql =   `SELECT * from userdata where Username = '${an}' `;
    con.query(sql, function ( result) {
     a=result[0].Password;
      console.log(a);
      console.log(result[0])
    });
  });
//  con.connect(function(err) {
//  if (err) throw err;
//  console.log("Connected!");
//  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//  con.query(sql, function (err, result) {
//    if (err) throw err;
//    console.log("1 record inserted");
//  });
//});